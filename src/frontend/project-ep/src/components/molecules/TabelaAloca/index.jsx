import React, { useState, useEffect } from 'react';
import ModalAloca from '../modalAloca/index';
import styles from './styles.module.scss'
import Celula from '../../atoms/Celula/index'

const url = 'http://127.0.0.1:3001/'

function Tabela() {
  const [iniciativas, setIniciativas] = useState([]);
  const [iniciativasAlocadasState, setIniciativasAlocadasState] = useState({}); // Estado para armazenar os dados das iniciativas
  const [iniciativasAAlocarState, setIniciativasAAlocarState] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [selectedCell, setSelectedCell] = useState(null); // Estado para armazenar a célula selecionada
  const [selectedIndex, setSelectedIndex] = useState(null)
  // const [turmaId, setTurmaId] = useState(null)

  const SalvarIniciativasAAlocar = () => {
    let iniciativasAAlocar = []
    // let iniciativasAlocadas = []

    iniciativas.map((iniciativa, index) => {
      if(iniciativa.status == "Preparado") {
        iniciativasAAlocar.push(iniciativa)
      }
      // if(iniciativa.turmaId in turmasIdState ){
      //   iniciativasAlocadas.push(iniciativa)
      // }

      // setIniciativasAAlocarState(iniciativasAAlocar)
      console.log("iniciativasAAlocar")
      console.log(iniciativasAAlocar)
      // setIniciativasAlocadasState(iniciativasAlocadas)
    })
    setIniciativasAAlocarState(iniciativasAAlocar)
  }

  const SalvarIniciativasPorTurma = () => {
    const hashtable = {}
    turmas.map((turma, i) => {
      const idTurma = turma.id;
      const iniciativasDaTurma = iniciativas.filter(iniciativa => iniciativa.turmaId == idTurma)

      hashtable[idTurma] = []

      iniciativasDaTurma.forEach(iniciativa => {
        hashtable[idTurma][iniciativa.moduloId - 6] = iniciativa;
      });

      // hashtable[idTurma] = iniciativas.filter(iniciativa => iniciativa.turmaId == idTurma) 
      console.log(`hashtable[${idTurma}]`)
      console.log(hashtable[idTurma])

    })
    // for(let i = 0; i < turmas.length; i++){
    // }
      // iniciativasPorTurma = turmas.map((turma, index) => {
      //   return iniciativas.filter(iniciativa => iniciativa.turmaId == turma.id)
      // })
      setIniciativasAlocadasState(hashtable)
  }
  // UseEffect para pegar turmas
  useEffect(() => {
    fetch(url+'turma')
    .then((response) => response.json())
    .then((data) => {
        setTurmas(data);
        // console.log(data)

    })
    .then(() => {
      console.log("turmas")
      console.log(turmas)
      // console.log("vou salvar id das turmas")
      // SalvarIdDasTurmas()
    })
    .catch((err) => {
        console.log(err.message)

    })
  }, [])

  // UseEffect para pegar iniciativas
  useEffect(() => {
    fetch(url+'iniciativas')
    .then((response) => response.json())
    .then((data) => {
      setIniciativas(data);
      console.log(data)
    })
  }, [])

  // UseEffect para pegar iniciativas a serem alocadas e as de cada turma
  useEffect(() => {
    SalvarIniciativasPorTurma();
    SalvarIniciativasAAlocar();
  }, [iniciativas])


  // Use useEffect para buscar os dados das iniciativas do banco de dados quando o componente é montado
//   useEffect(() => {

//     fetch(url+`iniciativas?status=Preparado`)
//     .then((response) => response.json())
//         .then((data) => {
//             setIniciativasAlocadas(data);
//             console.log(data)
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })

    
//     // Substitua isso pela lógica de busca de dados real
//   }, [turmaId]);

  //useEffect para  
  useEffect(() => {
    let turmasData = [];
  
    fetch(url+'turma')
      .then((response) => response.json())
      .then((data) => {
          turmasData = data;
          setTurmas(data);
          return fetch(url+'iniciativas');
      })
      .then((response) => response.json())
      .then((iniciativasData) => {
          const iniciativasPorTurma = turmasData.map(turma => {
            return iniciativasData.filter(iniciativa => iniciativa.turmaId === turma.id);
          });
          setIniciativasAlocadasState(iniciativasPorTurma);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }, []);

  useEffect(() => {
    console.log("iniciativasAlocadas");
    console.log(iniciativasAlocadasState);
  }, [iniciativasAlocadasState])

  useEffect(() => {
    if(selectedCell){
      openModal()
      console.log(selectedCell)
    }
  }, [selectedCell])

  // Função para abrir o modal e definir a célula selecionada
  const openModal = () => {
    // setSelectedCell(celula);
    // console.log(celula)
    // console.log("iniciativa")
    // console.log(iniciativa)
    // setSelectedIndex(iniciativa.id)
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCell(null);
  };

  // Função para alocar uma iniciativa à célula selecionada
  const AlocarIniciativa = async (celula, iniciativa) => {
    console.log(celula)
    setIniciativasAlocadasState(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData));
      // const newData = [...prevData];
      newData[celula[0]].push(iniciativa);
      return newData;
    });

    iniciativa.turmaId = celula[0] + 1
    iniciativa.status = 'Alocado'

    const response = await fetch(url+'iniciativas/'+iniciativa.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ iniciativa: iniciativa }),
    body: JSON.stringify(iniciativa),

  })

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    closeModal();
  };

  const headers = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "Módulo 6", "Módulo 7", "Módulo 8", "Módulo 9", "Módulo 10", "Módulo 11", "Módulo 12",]

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
        <tr>
            <th>Turma / Módulo</th>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {turmas.map((turma, index) => (
                <tr key={index}>
                    <td>{turma.nomeTurma}</td>
                    {
                        headers.map((cabecalho, i) => (
                          <td key={i} >
                            {iniciativasAlocadasState[index] && iniciativasAlocadasState[index][i] ? (
                                <Celula iniciativa={iniciativasAlocadasState[index][i]} onCelulaClick={() => {
                                  console.log([index, i])
                                  console.log(iniciativasAlocadasState[index][i])
                                  // openModal(iniciativasAlocadasState[index][i], [index, i])
                                } 
                                }
                                />
                            ) : (
                                <div onClick={() =>  {
                                  setSelectedCell([index, i])
                                  console.log([index, i])
                                  // openModal([index, i])
                                }}>+</div>
                            )}
                          </td>
                        ))
                    }

                </tr>
            ))}
        </tbody>
      </table>
      {/* {modalOpen && <Modal onClose={closeModal} onSelect={allocateInitiative} />} */}
      <ModalAloca key={selectedIndex} alocaIniciativa={AlocarIniciativa} celula={selectedCell} iniciativasAAlocar={iniciativasAAlocarState} isOpen={modalOpen} setIsModalOpen={setModalOpen}/>

    </div>
  );
}

export default Tabela;

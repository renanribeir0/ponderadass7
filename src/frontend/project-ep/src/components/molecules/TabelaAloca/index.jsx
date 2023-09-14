import React, { useState, useEffect } from 'react';
import Modal from '../modalAloca/index';
import styles from './styles.module.scss'
import Celula from '../../atoms/Celula/index'

const url = 'http://127.0.0.1:3001/'

function Tabela() {
  const [iniciativas, setIniciativas] = useState([]);
  const [iniciativasAlocadasState, setIniciativasAlocadasState] = useState([]); // Estado para armazenar os dados das iniciativas
  const [iniciativasAAlocarState, setIniciativasAAlocarState] = useState([]);
  const [turmas, setTurmas] = useState([])
  const [turmasIdState, setTurmasIdState] = useState([])
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [selectedCell, setSelectedCell] = useState(null); // Estado para armazenar a célula selecionada
  const [selectedIndex, setSelectedIndex] = useState(null)
  // const [turmaId, setTurmaId] = useState(null)

  

  // const SalvarIdDasTurmas = () => {
  //   let turmasId = []
  //   turmas.map((turma, index) => {
  //     turmasId.push(turma.id)
  //   })
  //   setTurmasIdState(turmasId)
  //   console.log(turmasId)
  // }

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

    for(let i = 0; i < turmas.length; i++){
      const idTurma = turmas[i].id;
      hashtable[idTurma] = iniciativas.filter(iniciativa => iniciativa.turmaId == idTurma) 
      console.log(hashtable[idTurma])
    }
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
        console.log(data)

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

  // UseEffect para pegar id das turmas
  // useEffect(() => {
  //   let turmasId = []
  //   turmas.map((turma, index) => {
  //     turmasId.push(turma.id)
  //   })
  //   setTurmasIdState(turmasId)
  //   console.log(turmasId)
  // }, [turmas])

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

  // Função para abrir o modal e definir a célula selecionada
  const openModal = (iniciativa) => {
    setSelectedCell(iniciativa);
    setSelectedIndex(iniciativa.id)
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCell(null);
  };

  // Função para alocar uma iniciativa à célula selecionada
  const allocateInitiative = (initiative) => {
    setIniciativasAlocadasState(prevData => {
      const newData = [...prevData];
      newData[selectedCell] = initiative;
      return newData;
    });
    closeModal();
  };

  const headers = ["2022.1A", "2022.1B", "2022.2A", "2022.2B", "2023.1A", "2023.1B", "2023.2A", "2023.2B", "2024.1A", "2024.1B", "2024.2A", "2024.2B",]

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
        <tr>
            <th>Turma / Tri</th>
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
                                      console.log("NHAAAA")
                                      console.log(iniciativasAlocadasState[index][i])
                                      openModal(iniciativasAlocadasState[index][i])
                                    } 
                                    }
                                    />
                                ) : (
                                    <div onClick={() =>  {
                                      console.log("NHAAAA")
                                      openModal({turmaIndex: index, cellIndex: i}
                                      )}}>+</div>
                                )}
                            </td>
                        ))
                    }

                </tr>
            ))}
        </tbody>
      </table>
      {/* {modalOpen && <Modal onClose={closeModal} onSelect={allocateInitiative} />} */}
      <Modal key={selectedIndex} iniciativa={selectedCell} iniciativasAAlocar={iniciativasAAlocarState} isOpen={modalOpen} setIsModalOpen={setModalOpen}/>
    </div>
  );
}

export default Tabela;

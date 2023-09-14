import styles from './styles.module.scss'


const Celula = (props) =>  {

    // Função para determinar a cor de fundo com base em uma propriedade da iniciativa
    const determinarCor = (iniciativa) => {
      if (!iniciativa) return 'white';  // Cor para células vazias
  
      // Substitua 'propriedade' pela propriedade real que você deseja verificar
      switch (iniciativa.propriedade) {
        case 'valor1':
          return 'green';
        case 'valor2':
          return 'yellow';
        case 'valor3':
          return 'red';
        default:
          return 'white';
      }
    };
  
    return (
       
        <div className={styles.celula} onClick={props.onCelulaClick} style={{ backgroundColor: determinarCor(props.iniciativa) }}>
          {props.iniciativa ? (
            <>
              <div>Parceiro: {props.iniciativa.nomeEmpresa}</div>
              <div>Tema: {props.iniciativa.tema}</div>
            </>
          ) 
          : 
          (
            '+'
          )}
        </div>
    );
  }
  
export default Celula;
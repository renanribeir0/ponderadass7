import React from "react";
import Button from '@mui/material/Button';

const ButtonUsage = (props) => {
  return <Button variant="contained" onClick={() => props.setProblemaEnviado(!props.problemaEnviado)} disabled={props.disabled}>Confirmar</Button>;
  
}

export default ButtonUsage;
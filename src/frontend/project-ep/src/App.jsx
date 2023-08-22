import React from "react";
// import Router from "./router";
// import { telaExemplo } from "./pages/exemplo";
import ButtonUsage  from './components/atoms/botao.tsx'
import Navbar from './components/atoms/navbar.tsx'
import { Link } from "react-router-dom";

  function App() {
    return (
      <>
        <h1>NHAAA</h1>
        <Navbar/>
        <ButtonUsage/>
        <button>
          <Link to="/iniciativas">NHAAA</Link>
        </button>
        {/* <telaExemplo/> */}
      </>
    );
  } 

  export default App;

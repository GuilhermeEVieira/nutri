import React, { useEffect , useState } from "react";

import'./App.css';

function App(){
  const [nutri, setNutri] = useState([]);


  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url)
    .then((r) => r.json())
    .then((json) => setNutri(json))
  }, []);

  return(
    <div>
      <header>
        <div className="navbar-nav">
          <strong >React Nutri</strong>
        </div>
      </header>

      {nutri.map((item)=>{
        return(
         <div className="produto-container-prisncipal">
          <article key={item.id} >
            <strong>{item.titulo}</strong>
            <div className="produto-prisncipal">
            <img src={item.capa} alt={item.titulo} />
            <p>{item.subtitulo}</p>
            <button>Acessar</button>
            </div>
          </article>
          </div>
        );
      })}
    </div>
  );
}

export default App;
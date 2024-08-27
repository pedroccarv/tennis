import React, { useEffect, useState } from 'react';
import './App.css';
import dados from '/api.json';
import { Link } from 'react-router-dom';
function Mulheres() {
  const [tenis, setTenis] = useState([]);

  useEffect(() => {
    
    const mulheres = dados.filter(jogador => 
      jogador.nome === "Serena Williams" ||
      jogador.nome === "Naomi Osaka" ||
      jogador.nome === "Ashleigh Barty" ||
      jogador.nome === "Simona Halep"
    );
    setTenis(mulheres);
  }, []);

  return (
    <>
      <main className="container">
        <h1 className='titulo'>Melhores Tenistas</h1>
        <div className='button'>
        <Link to="/" className="link-rota"><button>Pagina Inicial</button></Link>

        <Link to="/vitorias" className="link-rota"><button>Vitorias crescente</button></Link>
        <Link to="/titulos" className="link-rota"><button>Maior pontuacao</button></Link>
          
        </div>

        <div className="grid-container">
          <div className='Capeça'>
            <h5>Nome</h5>
            <h5>Nacionalidade</h5>
            <h5>Vitórias</h5>
            <h5>Derrotas</h5>
            <h5>Pontuação</h5>
            <h5>Campeonatos</h5>
          </div>

          {tenis.map((t) => (
            <div className="lista" key={t.nome}>
              <div>{t.nome}</div>
              <div>{t.nacionalidade}</div>
              <div>{t.vitorias}</div>
              <div>{t.derrotas}</div>
              <div>{t.pontuacao}</div>
              <div>
                <ul>
                  {t.campeonatos.map(campeonato => (
                    <li key={campeonato.nome}>
                      {campeonato.nome} ({campeonato.tipo}): {campeonato.quantidade}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div id="" className=""></div>
    </>
  );
}

export default Mulheres;

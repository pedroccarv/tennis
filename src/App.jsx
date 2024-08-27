import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import dados from './api.json';

function App() {


  const [tenis, setTenis] = useState([])

  useEffect(() => {
    fetch(dados).then(res => res.json()).then(data => setTenis(data))
  }, [])
  
  return (
    <>
    <main className="container">
    <h1 className='titulo'>Melhores Tenistas</h1>
    <div className='button'>
    <Link to="/vitorias" className="link-rota"><button>Vitorias crescentes</button></Link>
    <Link to="/titulos" className="link-rota"><button>Maior pontuacao</button></Link>
    <Link to="/mulheres" className="link-rota"><button>Mulheres</button></Link>
    </div>

    <div className="grid-container">
    <div className='Capeça'>
    <h5>Nome</h5>
    <h5>Nacionalidade</h5>
    <h5>Vitorias</h5>
    <h5>Derrotas</h5>
    <h5>Pontuacao</h5>
    </div>


    {tenis.map((t) => (
       <div className="lista" key={t.nome}>
        <div>{t.nome}</div>
        <div>{t.nacionalidade}</div>
        <div>{t.vitorias}</div>
        <div>{t.derrotas}</div>
        <div>{t.pontuacao}</div>
        <div>
       {t.campeonatos.map(campeonato => (
                    <li key={campeonato.nome}>
                      {campeonato.nome} ({campeonato.tipo}): {campeonato.quantidade}
                    </li>
                  ))}
                  </div>
       </div>
    ))}
    </div>
    </main>
    <div id="" className="">

    </div>
    </>
  )
}

export default App

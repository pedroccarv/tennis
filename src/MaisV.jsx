import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [tenis, setTenis] = useState([]);
  const [ordenacao, setOrdenacao] = useState('vitorias-crescente');

  useEffect(() => {
    fetch("./api.json")
      .then(res => res.json())
      .then(data => setTenis(data));
  }, []);

  // Função para ordenar os jogadores
  const ordenarTenistas = (dados) => {
    const dadosOrdenados = [...dados];
    if (ordenacao === 'vitorias-crescente') {
      return dadosOrdenados.sort((a, b) => a.vitorias - b.vitorias);
    }
    // Adicione outras opções de ordenação se necessário
    return dadosOrdenados;
  };

  // Ordenar os tenistas de acordo com o estado de ordenação
  const tenisOrdenados = ordenarTenistas(tenis);

  return (
    <>
      <main className="container">
        <h1 className='titulo'>Melhores Tenistas</h1>
        <div className='button'>
        <Link to="/" className="link-rota">
            <button>Pagina inicial</button>
          </Link>
          <button>Mais títulos</button>
          <Link to="/mulheres" className="link-rota">
            <button>Mulheres</button>
          </Link>
        </div>

        <div className="grid-container">
          <div className='Capeça'>
            <h5>Nome</h5>
            <h5>Nacionalidade</h5>
            <h5>Vitórias</h5>
            <h5>Derrotas</h5>
            <h5>Pontuação</h5>
          </div>

          {tenisOrdenados.map((t) => (
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
        {/* Conteúdo adicional pode ser adicionado aqui */}
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from '../App'
import Mulheres from '../MaisMulheres'
import Vitorias from '../MaisV'
import Titulos from '../MaisT'
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/mulheres" element={<Mulheres />} />
        <Route path="/vitorias" element={<Vitorias />} />
        <Route path="/titulos" element={<Titulos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
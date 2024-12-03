import { useState } from 'react';

import Nome from './components/Nome';

function App() { //react baseado em component 
  const [aluno, setAluno] = useState('Sujeito Programador');


  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Componente App</h1>
      <br />
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName('Lucas Oliveira')}>Mudar Nome</button>
    </div>
  );
}
//função anônima para evitar loop infinito
export default App;


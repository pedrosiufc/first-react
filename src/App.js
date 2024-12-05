import { useState } from 'react';

function App() { //react baseado em component 

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);


  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])//utilizando o spread operator
    setInput(''); //limpando a entrada
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa</label><br />
        <input
          placeholder='Digite uma tarefa'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />

        <button type="submit">Registrar</button>
      </form>

      <br /><br />

      <ul>
        {tarefas.map(tarefa => ( //utlizando map para percorer a lista
          <li key={tarefa}>{tarefa}</li> //utlizando kei para evitar erros no console
        ))}
      </ul>

    </div>
  );
}
//função anônima para evitar loop infinito
export default App;


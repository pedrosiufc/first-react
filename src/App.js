import { useState, useEffect } from 'react';

function App() { //react baseado em component 

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);

  //buscando no localStorage
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);


  //cadastrando no localStorage
  useEffect(() => {
    //transformando um array em string
    localStorage.setItem('@tafera', JSON.stringify(tarefas));
  }, [tarefas]);


  /* function handleRegister(e) {
     e.preventDefault();
 
     setTarefas([...tarefas, input])//utilizando o spread operator
     setInput(''); //limpando a entrada
   }*/


  function handleRegister(event) {
    event.preventDefault();
    const newTarefas = [...tarefas, input]
    setTarefas(newTarefas);
    localStorage.setItem('@tarefa', JSON.stringify(newTarefas))
    setInput('');
  }

    /*Sempre que usarmos o useEffect como ilustrado abaixo, ao fazer o refresh da pagina, o array de tarefas será inicializado com as duas tarefas predefinidas, o que fará com que useEffect encare como uma alteração e armazena no localStorage apenas as duas tarefas sempre que é feito o reload da página.*/ 

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


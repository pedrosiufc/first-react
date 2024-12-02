import Nome from './components/Nome';

function App() { //react baseado em component 
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Lucas" idade={20} />
      <br />
      <Nome aluno="José Silva" idade={43} />
    </div>
  );
}

export default App;


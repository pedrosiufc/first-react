import { useState } from 'react';

function App() { //react baseado em component 
 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const[user, setUser] = useState({}); //começando com um objeto vazio

function handleRegister(e){
  e.preventDefault();
  
  alert('Usuário Registrado com Sucesso')
  setUser({
    nome: nome,
    idade: idade,
    email: email,
  })
}

  return (
    <div>
      <h1>Cadastrando Usuário</h1>
     <form onSubmit={handleRegister}>
      <label>Nome</label><br/>
      <input 
      placeholder='Digite seu nome'
      value={nome}
      onChange={(e)=> setNome(e.target.value) }
      /><br/>

      <label>Email</label><br/>
      <input
      placeholder='Digite seu Email'
      value={email}
      onChange={(e)=> setEmail(e.target.value) }
      /><br/>

      <label>Idade</label><br/>
      <input 
      placeholder='Digite sua idade'
      value={idade}
      onChange={(e)=> setIdade(e.target.value) }
      /><br/>
     
      <button type="submit">Registrar</button>
     </form>
     
     <br/><br/>
     
     <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span><br/>

     </div>

    </div>
  );
}
//função anônima para evitar loop infinito
export default App;


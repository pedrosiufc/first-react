
//react baseado em component
//pegando a propriedade com props
//pegando propriedade por nome {aluno}
function Nome({ aluno, idade }) { //pegando a propriedades
  return (
    <div>

      <span>Bem Vindo: {aluno} - Idade: {idade} anos </span>

    </div>
  );
}

export default Nome;
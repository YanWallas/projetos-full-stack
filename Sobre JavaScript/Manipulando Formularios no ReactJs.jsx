import { useState } from 'react';

function App(){
  {/* useState */}
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);


 // Função para add tarefa escrita no form, na lista de tarefas. 
  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

  }

  return(
    <div>
      <h1>Cadastrando usuario</h1>

       <form onSubmit={handleRegister}> {/*trabalhando com forms, e chamando uma função quando clicar no button com type submit */}
        <label>Nome da tarefa:</label><br/>
        <input 
         placeholder="Digite uma tarefa" 
         value={input} // O valor do campo é a State input.
         onChange={ (e) => setInput(e.target.value) } // Pegando valor digitado no input.
        /><br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

       <ul> {/*passando pela lista e jogando na tela */}
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;


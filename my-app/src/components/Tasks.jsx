import React from 'react';
import Task from './Task';


// Primeiro cria-se uma lista, usando um array e método de array - map, filter, etc
// Para cada item iterado da lista, é preciso adicionar uma key/chave, que no caso,
// faz sentido que seja a id do objeto correspondente à cada item
const Tasks = ({ tasks }) => {

  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task={task}/>)
      )}
    </>
  )
}

export default Tasks;
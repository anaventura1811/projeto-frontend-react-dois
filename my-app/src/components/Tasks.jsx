import React, { useState }  from 'react';

// Primeiro cria-se uma lista, usando um array e método de array - map, filter, etc
// Para cada item iterado da lista, é preciso adicionar uma key/chave, que no caso,
// faz sentido que seja a id do objeto correspondente à cada item
const Tasks = () => {

  const [tasks, setTasks] = useState([
      { 
        id: 1, 
        text: 'Estudar',
        day: 'Abr 29 às 10:30'
      },
      { 
        id: 2, 
        text: 'Revisar conteúdo',
        day: 'Abr 30 às 10:30'
      },
      { 
        id: 3, 
        text: 'Comprar macarrão',
        day: 'Mai 01 às 14:30'
      },
    ]
  )

  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>)
      )}
    </>
  )
}

export default Tasks;
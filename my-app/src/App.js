import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks] = useState([
    { 
      id: 1, 
      text: 'Estudar',
      day: 'Abr 29 às 10:30',
      reminder: true
    },
    { 
      id: 2, 
      text: 'Revisar conteúdo',
      day: 'Abr 30 às 10:30',
      reminder: true
    },
    { 
      id: 3, 
      text: 'Comprar macarrão',
      day: 'Mai 01 às 14:30',
      reminder: true
    },
  ]
)

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

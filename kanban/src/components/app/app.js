
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

import './app.css';

function App(){
  const data = [
    {title:'Backlog'},
    {title:'Ready'},
    {title:'In Progress'},
    {title:'Finished'},
  ];

  const task = [
    {text:'task1'},
    {text:'task2'},

  ];

 
 
  return (
    <div className="app">
      <Header/>
      <Main data={data} task={task}/>
      <Footer/>
      

      
    
    </div>
  );
  
}

export default App;
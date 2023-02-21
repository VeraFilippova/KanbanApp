
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
 
  return (
    <div className="app">
      <Header/>
      <Main data={data}/>
      <Footer/>
      

      
    
    </div>
  );
  
}

export default App;
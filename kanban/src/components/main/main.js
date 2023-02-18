import Block from '../block/block';
import Card from '../card/card';

import './main.css';


const Main = () =>{
  return(
    <div className="main d-flex align-items-start ">
      <Block title="Backlog">
        <Card></Card>
      </Block>
      <Block title="Ready">
        <Card></Card>
      </Block>
      <Block title="Progress">
        <Card></Card>
      </Block>
      <Block title="Finished">
        <Card></Card>
      </Block>
    </div>
  )
}

export default Main;
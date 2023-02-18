import Card from '../card/card';
import './block.css';
import FooterBlock from './footer-block/footer-block';




const Block = (props) =>{
  return(
    <div className="block">
      <div >
       {props.title}
      </div>
      <Card></Card>
      <FooterBlock/>
    </div>
  )
}

export default Block;
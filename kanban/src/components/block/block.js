import Card from '../card/card';
import './block.css';
import FooterBlock from './footer-block/footer-block';





const Block = ({title}) =>{

  return(
    <div className="block">
      <div className="header-block">
        {title}
        </div>
      <Card></Card>
      <FooterBlock/>
    </div>
  )
}

export default Block;
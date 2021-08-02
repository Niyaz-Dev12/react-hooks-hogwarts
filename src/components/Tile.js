import React from 'react'
import porco from "../assets/porco.png";
import Hogdetails from './Hogdetails';

function Tile({hoger,onClicked,showCondition}) {

  const handleDisplay=(e)=>{
  if(e.target.name===hoger.name){
  return true;}
  else {
    return false;
  }
  }
 

  return (
    <div  class="ui grid container pigTile " onClick={(e)=>onClicked(e)} name={hoger.name}>
      <h2 >{hoger.name}</h2>
     <img  src={porco}/>
     {showCondition?<Hogdetails hoger={hoger} />: null}
     

    </div>
  )
}

export default Tile

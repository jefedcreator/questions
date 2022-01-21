import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title,info}) => {
  const[showInfo, setShowInfo] = useState(false)
  
  const toggle = () =>{
    setShowInfo(prevInfo => !prevInfo)
  }

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {showInfo ? <AiOutlineMinus onClick={toggle} className='btn'/> :<AiOutlinePlus onClick={toggle} className='btn'/> }
      </header>
      {showInfo && <p>{info}</p>}
    </article>
        );
};

export default Question;

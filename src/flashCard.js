

import React, { useState } from 'react';
import './flashes.css';
export default function App(){
    return <Flash />
}
const question=[
    {id:1,
    question:'what language is react based on?',
    answer:'javascript'
    },
    {
        id:2,
        question:"what are the building block of react app?",
        answer:"component"
    },{
        id:3,
        question:"what is the name of the syntax we use to describe a Ui in react?",
        answer:'JSX'
    },{
        id:4,
        question:"how to pass data from parents to child components",
        answer:'props'
    },{
        id:5,
        question:"how to give components memory?",
        answer:'state'
    },{
        id:6,
        question:"what do we call an input element that is completely synchronized with state?",
        answer:'control element'
    }]
function Flash(){
    const [selectedId, setSelectedid]=useState(1);
function handleClick(id){
  setSelectedid(id!==selectedId?id:null);
}
return (<div className='flashs' >
 
    {question.map((question)=>(
      <div className={selectedId==question.id?'answers':'flashes'} 
      key={question.id}  onClick={()=>handleClick(question.id)}>
        
        <p>{selectedId==question.id?question.answer:question.question}</p>
        </div>))}

</div>)
}
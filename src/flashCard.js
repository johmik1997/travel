import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
return (<div className='flashs'>
    {question.map((question)=><div><p>{question}</p></div>)}
</div>)
}

const root=ReactDOM.createRoot(document.querySelector('root'));
root.render(<React.StrictMode>
      <Flash />
</React.StrictMode>);
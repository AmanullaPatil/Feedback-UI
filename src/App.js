
import Header from './components/Header.jsx';
import FeedBackList from './components/FeedBackList.jsx';
import FeedBackData from'./data/feedBackData.js';
import { useState } from 'react';
import FeedBackStats from './components/FeedBackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import {v4 as uuidv4} from 'uuid';

 function App(){
  const [feedback,setFeedBack]=useState(FeedBackData)
  const deleteFeedback =(id)=>{
    if(window.confirm('Are you sure?')){
    setFeedBack (feedback.filter((item)=>
      item.id != id));
    }
  }
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
setFeedBack([newFeedback,...feedback])
  }
  // console.log(feedback)
  return(
    <>
    <Header />

    <div className='container'>
    <FeedbackForm handleAdd={addFeedback}/>
      <FeedBackStats feedback ={feedback}/>
       <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
   
       </div>
    </>
  )
 };
 export default App;

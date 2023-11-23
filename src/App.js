
import Header from './components/Header.jsx';
import FeedBackList from './components/FeedBackList.jsx';
import FeedBackData from'./data/feedBackData.js';
import { useState } from 'react';
import FeedBackStats from './components/FeedBackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/Pages/About.jsx';
import AboutLinkIcon from './components/AboutLinkIcon.jsx';

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
    <BrowserRouter>
    <Header />
     <div className='container'>
      <Routes>
        <Route path='/'element={
          <>
        <FeedbackForm handleAdd={addFeedback}/>
      <FeedBackStats feedback ={feedback}/>
       <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
       <AboutLinkIcon/>
       </>}></Route>
       <Route path='/About' element={<About/>}/>
    
       </Routes>
      
       </div>
       </BrowserRouter>
  )
 };
 export default App;

import React, { useState } from 'react'

export default function TextArea(props) {
    //Function toconvert the text into uppercase 
    const getUpperCase= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to uppercase","success");
    }
    //Function to convert the text into lowercase
    const getLowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text has been converted to lowercase!","success");
    }
    //Function to clear the text
    const getCleartext = ()=>{
        let newText ='';
        setText(newText);
    }
    //To edit the state i.e the text in the textbox
    const handleEventChange = (event)=>{
        console.log("On Change evenet has encountered");
        setText(event.target.value);
    }
  const [text,setText] = useState('');
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <div className="mb-3" >
      <h1 >{props.heading}</h1>
        <textarea style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} className="form-control" value={text} onChange={handleEventChange} id="textBox" rows="8"></textarea>
      </div>
      <button type="button" className='btn btn-primary mx-2' onClick={getUpperCase}>Convert to Uppercase</button>
      <button type="button" className='btn btn-primary mx-2' onClick={getLowercase}>Convert to Lowercase</button>
      <button type="button" className='btn btn-primary' onClick={getCleartext}>Clear Text</button>
    </div>
    <div className='container my-4' style={{color : props.mode==='light' ? 'black':'white' }}>
        <h1>Your text summary:</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>Takes {0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in the above text box to preview the text"}</p>
    </div>
    </>
  )
}

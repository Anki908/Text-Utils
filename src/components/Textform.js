
import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Has been enabled" , "success");
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("lowerCase Has been enabled" , "success");
    }
    const handleclClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Has been enabled" , "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const[text , setText] = useState('Enter the Text');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
      <div className = "mb-3" >
        <textarea className ="form-control" value= {text} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white' , color: props.mode === 'dark'? 'white': 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className = 'btn btn-primary ' onClick = {handleUpClick}>Convert To Uppercase</button>
      <button className = 'btn btn-primary mx-1' onClick = {handleloClick}>Convert To Lowercase</button>
      <button className = 'btn btn-primary mx-1' onClick = {handleclClick}>Clear</button>
    </div>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.0018 * text.split(" ").length} Avg Time to read</p>
        <h2> Preview</h2>
        <p>{text.length > 0? text:"Enter Something above to preview here"}</p>
    </div>
    </>
  )
}

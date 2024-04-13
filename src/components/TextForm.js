import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }

  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied to clipboard","success");
  }

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#1c2839',
              color: props.mode === 'light' ? 'black' : 'white'
            }}
          ></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-light mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>Number of Words: {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length}, Number of Letters: {text.length}</p>
        <p>{0.008 * text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} Minutes to read this</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Enter Something in the above textbox'}</p>
      </div>
    </>
  );
}

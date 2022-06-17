import React, {useState} from 'react'

export default function (props) {
    const handleUpClick = () => {
      //  console.log('Uppred');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        //  console.log('Uppred');
          let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
      }
    const handleOnChange = (event) => {
        //console.log('Changed');
        setText(event.target.value);
    }
    const handleClearClick = () => {
        //console.log('Changed');
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleReplace = () => {
        //console.log('Changed');
        let newText = text.replace("Jay", "JayGhetia");
        setText(newText);
        props.showAlert("Jay Changed to JayGhetia", "success");
    }
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Text Reversed!", "success");
      };
    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('Enter text here');
    //setText("newstate");
    return (
        <>
        <div className="container" style={{backgroundColor: props.mode==='white'?'black':'white'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text}  style={{backgroundColor: props.mode==='white'?'black':'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={handleReplace}>Replace Jay</button>
            <button className="btn btn-primary mx-3" onClick={handleReverse}>Reverse</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="contaier my-3" >
                <h2>Your text summary</h2>
                <p> {text.split(/\s+/).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Min Reading Time </p>
                <h3>Preview</h3>
                <p>{ text} </p>
            </div>
            </>
    )
}

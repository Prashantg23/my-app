import React, {useState} from 'react'

export default function TextForm(props)  {
  const [text, setText] = useState("");
  const handleUpClicked =()=> {
    // console.log("You click on UpperCase")
    if(text ===""){
      props.showAlert("Enter a text below to Convert to UpperCase",'danger')
    
    }else{
      const newtext = text.toUpperCase();
      setText(newtext)
  
     props.showAlert("Converted to upperCase",'success')
    }
    
  }
  const handleLoClicked =()=> {
    // console.log("You click on UpperCase")
    if(text ===""){
      props.showAlert("Enter a text below to Convert to LowerCase",'danger')
    
    }else{
    const newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to LowerCase","success")
    }
  }
  const handleClearClicked =()=> {
    // console.log("You click on Uppe"rCase")
    if(text ===""){
      props.showAlert("Enter a text below to Clear",'danger')
    
    }else{
    const newtext = "";
    setText(newtext)
    props.showAlert("Text Clear","success")
    }
  }
  const handleOnChange =(event)=> {
    // console.log("You click on OnChange")
    setText(event.target.value)

  }
  return (
  <>
    <div className = "container" style={{color:props.mode=== 'dark'?'white':'black'}
        }  >
        <h2>{props.heading}  </h2>
        <div className= "mb-3">
       
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'grey':'white', 
          color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows ="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClicked}> Convert to Upper Case </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClicked}> Convert to Lower Case </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClicked}> Clear Text </button>
    </div>
  <div className="container my-1 "style={{color:props.mode=== 'dark'?'white':'black'}
        }>
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h4>Preview</h4>
    <p>{text.length>0 ? text:"Enter the text to preview it here "}</p>
  </div>
    </>
  )
}

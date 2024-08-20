import React ,{useState} from 'react'

export default function Text() {
    const [text,settext]=useState("");

    const handleOnChange=(event)=>{
        settext(event.target.value);
    }
    const handleOnClick=()=>{
        settext(text.toUpperCase());
    }
  return (
    <div className="container">
  <textarea className="form-control mb-3" placeholder="Type here something" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange}></textarea>
  <button type="button" className=" btn btn-primary" onClick={handleOnClick}>Uppercase</button>
  <div>
 {text.split(" ").length} words and {text.length} character
 </div>
    </div>
  )
}

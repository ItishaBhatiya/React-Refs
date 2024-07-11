import React, { useEffect, useRef } from 'react'

const AutoFocus = () => {
    let id=useRef()

    const HandleData=()=>{
        console.log(id.current.value);
    }
    useEffect(()=>{
        id.current.focus();
    },[])
  return (
    <div>
        <input type='text' ref={id}></input>
        <button onClick={HandleData}>Submit</button>
    </div>
  )
}

export default AutoFocus
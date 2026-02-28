


import { useState } from "react";

export default function App(){
    const [hideText,setHideText]=useState(false);

    return (

        <>
        <button onClick={()=>{
            setHideText(!hideText)
        }}>{hideText?"showDetails":"HideDetails"}</button>
       {hideText===false && <p> Hellooooo...! Apoorva </p>}

        </>
    )

}
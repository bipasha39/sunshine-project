import React, { useState } from "react";
import "./sunORrain.css";
const SunORrain = () => {
    const [image,setImage]= useState("sun_example");

  const  handleClick = () =>{
        if(image==="sun_example"){
            setImage("rain_example")
            console.log("Its rainning")
        }
        if (image==="rain_example"){
            setImage("sun_example")
            console.log("Its a sunny day")
        }
    };
    return (
        <div>
           <div className="container">
      <div className="title">
       <h1>Sunny or not?</h1>
     </div> 
        </div>
        <div>
       <button className="button" onClick={handleClick}>
          Click me!
         </button>
       </div>
       <div className="image-container">
         
         <img  className="image-design" src={`../images/${image}.png`} />
         
       </div>
        </div>
    )
};

export default SunORrain


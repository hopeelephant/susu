import React from "react";
import Img5 from "./images/su5.jpg";
export default class Home extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img5} />
        <div className="des">
          这是一幅水彩作品
        </div>
      </div>
    )
  }
}

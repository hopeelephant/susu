import React from "react";
import Img3 from "./images/su3.jpg";
export default class Hobby extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img3} />
        <div className="des">
          这是一个色彩比较鲜艳的扑梦网
        </div>
      </div>
    )
  }
}

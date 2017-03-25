import React from "react";
import Img1 from "./images/su1.jpg";
export default class Tattoo extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img1} />
        <div className="des">
          这个里面还是主要是以动物为主的作品
        </div>
      </div>
    )
  }
}

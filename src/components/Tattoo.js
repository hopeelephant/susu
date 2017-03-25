import React from "react";
import Img1 from "./images/su1.jpg";
export default class Tattoo extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img1} />
        <div className="des">
          这是我的一幅水彩的作品是不是很漂亮呀
        </div>
      </div>
    )
  }
}

import React from "react";
import Img4 from "./images/su4.jpg";
export default class Blog extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img4} />
        <div className="des">
          这是我的一幅水彩的作品是不是很漂亮呀
        </div>
      </div>
    )
  }
}

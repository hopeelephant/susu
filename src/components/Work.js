import React from "react";
import Img2 from "./images/su2.jpg";
export default class Work extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img2} />
        <div className="des">
          这是我的一幅水彩的作品是不是很漂亮呀
        </div>
      </div>
    )
  }
}

import React from "react";
import Img5 from "./images/su5.jpg";
export default class Home extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img5} />
        <div className="des">
          这是我的一幅水彩的作品是不是很漂亮呀
        </div>
      </div>
    )
  }
}

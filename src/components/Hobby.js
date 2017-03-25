import React from "react";
import Img3 from "./images/su3.jpg";
export default class Hobby extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img3} />
        <div className="des">
          这是我的一幅水彩的作品是不是很漂亮呀
        </div>
      </div>
    )
  }
}

import React from "react";
import Img2 from "./images/su2.jpg";
export default class Work extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img2} />
        <div className="des">
          这里面有两幅作品，是以动物为主题的，另外添加了一点中国风的泼墨的感觉
        </div>
      </div>
    )
  }
}

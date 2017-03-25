import React from "react";
import Img4 from "./images/su4.jpg";
export default class Blog extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <img src={Img4} />
        <div className="des">
          这是一幅黑灰素描作品
        </div>
      </div>
    )
  }
}

// import React from "react";
// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         我是呢阿爸把mkkmklklddddddddddddd好
//       </div>
//     )
//   }
// }
// export default Header;



import React from 'react';
import {Link} from "react-router";

export default class Header extends React.Component{
  render(){
    return(
      <header>
        <Link to = "/" activeStyle={{color:"#000"}} onlyActiveOnIndex = {true}>home</Link>
        <Link to = "/hobby" activeStyle={{color:"#000"}}>hobby</Link>
        <Link to = "/blog" activeStyle={{color:"#000"}}>Blog</Link>
        <Link to = "/work" activeStyle={{color:"#000"}}>work</Link>
        <Link to = "/tattoo" activeStyle={{color:"#000"}}>tattoo</Link>
      </header>
    )
  }
}

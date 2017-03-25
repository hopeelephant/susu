// import React from "react";
// import　{Router,Route,hashHistory,IndexRoute} from "react-router";
// import App from "./App";
// export default function (){
//   return(
//     <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute />
//       </Route>
//     </Router>
//   )
// }

import React from "react";
import {Router,Route,browserHistory,IndexRoute} from "react-router";
import App from "./App";
import Home from "./components/Home";
import Tattoo from "./components/Tattoo";
import Work from "./components/Work";
import Hobby from "./components/Hobby";
import Blog from "./components/Blog";
export default function(){
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="tattoo" component={Tattoo}/>
        <Route path="work" component={Work}/>
        <Route path="hobby" component={Hobby}/>
        <Route path="blog" component={Blog}/>
      </Route>
    </Router>
  )
}

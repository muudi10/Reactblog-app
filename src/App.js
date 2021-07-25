import Home from "./pages/homepage/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const user =false;
  return (

    <Router>
      <TopBar />
      <Switch>
        <Route exact path ='/'>
          <Home/>
        </Route>
        <Route path ='/register'>
         {user ? <Home/> : <Register/>}
        </Route>
        <Route path ='/login'>
      {user ? <Home/> : <Login/>}
        </Route>
        <Route path ='/settings'>
              {user ? <Settings/> : <Home/>}
        </Route>
        <Route path ='/post/:Id'>
         <Single/>
        </Route>

        <Route path ='/write'>
       {user ? <Write/>: <Register/>}
        </Route>
        <Single/>
      </Switch>
    
 

   </Router>
  );
}

export default App;

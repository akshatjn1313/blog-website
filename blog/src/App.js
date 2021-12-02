import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/Write/Write";
import Single from "./single/Single";
import TopBar from "./topbar/TopBar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Setting from "./pages/settings/Settings";
import Post from "./post/Post";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/register'>
          {user ? <Home/>:<Register/>}
        </Route>
        <Route path='/login'>
        {user ? <Home/>:<Login/>}
        </Route>
        <Route path='/write'>
        {user ?<Write/>:<Register/>}
        </Route>
        <Route path='/settings'>
        {user ?<Settings/>:<Register/>}
        </Route>
        <Route path='/post/:postId'>
          <Single/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;

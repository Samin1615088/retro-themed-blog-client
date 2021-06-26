import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import TopBar from './components/TopBar/TopBar'
import Home from './screens/Home/Home'
import Single from './screens/Single/Single'
import Write from './screens/Write/Write';
import Login from './screens/Login/Login';

export default function App() {
  const user = false;

  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/write">
            {
              user ? <Write /> : <Login />
            }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




{/* <Router>
<div>
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</div>
<Router /> */}
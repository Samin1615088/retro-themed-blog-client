import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext } from "react";

import TopBar from './components/TopBar/TopBar'
import Home from './screens/Home/Home'
import Single from './screens/Single/Single'
import Write from './screens/Write/Write';
import Login from './screens/Login/Login';

export const UserContext = createContext();

export default function App() {
  const loginStatus = {
    isLoggedIn: true
  };

  return (
    <Router>
      <UserContext.Provider value={loginStatus} >
        <div>
          <TopBar />
          <Switch>
            <Route path="/post/:postId">
              <Single />
            </Route>
            <Route path="/write">
              {
                loginStatus.isLoggedIn ? <Write /> : <Login />
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
      </UserContext.Provider>
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
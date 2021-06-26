import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from "react";

import TopBar from './components/TopBar/TopBar'
import Home from './screens/Home/Home'
import Single from './screens/Single/Single'
import Write from './screens/Write/Write';
import Login from './screens/Login/Login';
import PrivateRoute from './screens/Login/PrivateRoute/PrivateRoute'

// export const UserContext = createContext();
export const UserContext = React.createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    username: '',
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <UserContext.Provider value={[loggedInUser, setLoggedInUser]} > */}
        <div>
          <TopBar />
          <Switch>
            <Route path="/post/:postId">
              <Single />
            </Route>
            <PrivateRoute path="/write">
              <Write />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        {/* </UserContext.Provider> */}
      </Router>
    </UserContext.Provider>
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
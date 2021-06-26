import './App.css';
import TopBar from './components/TopBar/TopBar'
import Home from './screens/Home/Home'
import Single from './screens/Single/Single'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route path="/single">
            <Single />
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
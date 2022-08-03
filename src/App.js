import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from "./pages/register/Register";
import ConfirmEmail from "./pages/confirmEmail/ConfirmEmail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/confirmEmail">
          <ConfirmEmail confirm={true} />
        </Route>
        <Route path="/sentEmail">
          <ConfirmEmail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

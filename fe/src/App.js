import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Task/Tasks";
import Login from "./pages/Login";
import Messenger from "./pages/Messenger";
import Task from "./components/Task/Task";
import User from "./components/User";
import { useDispatch, useSelector } from "react-redux";
import { history } from "./helpers/history";
function App() {
  const { user: currendUser } = useSelector((state) => state.auth);

  if (!currendUser) history.push("/login");
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/tasks" exact component={Tasks} />
          <Route path="/" exact component={Messenger} />
          <Route path="/user/:id" exact component={User} />
          <Route path="/login" exact component={Login} />
          <Route path="/tasks/:id" component={Task} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

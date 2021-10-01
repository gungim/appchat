import { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Task/Tasks";
import Login from "./pages/Login";
import Messenger from "./pages/Messenger";
import { getToken } from "./Utils/Common";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import Task from "./components/Task/Task";
function App() {
  useEffect(() => {
    const token = getToken();
    if (!token || null) {
      return;
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/tasks" exact component={Tasks} />
          <PrivateRoute path="/" exact component={Messenger} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/tasks/:id" component={Task} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

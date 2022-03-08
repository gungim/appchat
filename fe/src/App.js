import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import User from './components/User';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers/history';
import Channels from './components/Chanel/Channels';
import HomeGuild from './components/Guild/HomeGuild';
import Layout from './components/Layout';
import Discover from './components/Discover';
import { getAllGuild } from './actions/conversations.action';
function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) dispatch(getAllGuild(currentUser.user.id));
  }, [currentUser]);

  if (!currentUser) history.push('/login');
  else history.push('/channels/@me');
  return (
    <div className="App">
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/channels/@me" strict exact component={HomeGuild} />
            <Route path="/user/:id" exact component={User} />
            <Route path="/login" exact component={Login} />
            <Route
              path="/channels/:guildId?/:channelId?"
              exact
              component={Channels}
            />
            <Route path="/discover" component={Discover} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

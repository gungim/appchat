import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import User from './components/User';
import Channels from './components/Chanel/Channels';
import Home from './components/Home';
import Layout from './components/ui/Layout';
import Discover from './components/Discover';
import { getAllGuild } from './redux/actions/guild.action';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers/history';
import Message from './components/Messenger/Message';

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) dispatch(getAllGuild(currentUser.user.id));
  }, [currentUser]);

  if (!currentUser) history.push('/login');
  else history.push('/home');
  return (
    <div className="App bg-gray-700 w-screen h-screen">
      <Router history={history}>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" index element={<Home />} />
            <Route path="channels/:guildId" element={<Channels />}>
              <Route path=":channelId" element={<Message />} />
            </Route>
            <Route path="/user/:id" exact element={<User />} />
            <Route path="/discover" element={<Discover />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

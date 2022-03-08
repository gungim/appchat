import React, { useState } from 'react';
import Guilds from '../Guild';
import { MessengerContainer } from './styled';

function Layout({ children }) {
  return (
    <MessengerContainer>
      <Guilds />
      {children}
    </MessengerContainer>
  );
}

export default Layout;

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Guilds from '../../Guild';

function Layout() {
  return (
    <div className='flex justify-start bg-gray-800 min-h-screen relative'>
      <Guilds />
      <Outlet/>
    </div>
  );
}

export default Layout;

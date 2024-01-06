import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBarPanel';

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;

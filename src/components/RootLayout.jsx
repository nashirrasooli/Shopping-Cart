import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';

function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </>
  );
}

export default RootLayout;

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignedInMenu from './menus/signedInMenu'

function Navbar() {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <div style={{ display: 'flex' }}>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/orders'>
        Orders
      </NavLink>
      <NavLink exact to='/create-order'>
        Create Order
      </NavLink>
      {authenticated && <SignedInMenu />}
    </div>
  );
}

export default Navbar;

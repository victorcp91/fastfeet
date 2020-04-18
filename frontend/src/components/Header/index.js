import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'assets/images/fastfeet-logo.png';
import { Container, Navigation, UserArea } from './styles';

export default function Header() {
  function logout() {
    console.tron.log('logout');
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <NavLink to="/encomendas">
            <img src={logo} alt="FASTFEET Admin Home page" title="FASTFEET" />
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/encomendas">ENCOMENDAS</NavLink>
          </li>
          <li>
            <NavLink to="/entregadores">ENTREGADORES</NavLink>
          </li>
          <li>
            <NavLink to="/destinatarios">DESTINATÁRIOS</NavLink>
          </li>
          <li>
            <NavLink to="/problemas">PROBLEMAS</NavLink>
          </li>
        </ul>
      </Navigation>
      <UserArea>
        <p className="username">Admin FastFeed</p>
        <button className="logout" type="button" onClick={logout}>
          sair do sistema
        </button>
      </UserArea>
    </Container>
  );
}

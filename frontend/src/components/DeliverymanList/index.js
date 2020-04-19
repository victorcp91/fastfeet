import React from 'react';

import ActionsMenu from 'components/ActionsMenu';
import PenIcon from 'assets/icons/Pen';
import TrashCanIcon from 'assets/icons/TrashCan';
import { Container, Header, Content, Order } from './styles';

export default function OrdersList() {
  function renderActions() {
    return (
      <ActionsMenu>
        <li>
          <button type="button">
            <PenIcon />
            Editar
          </button>
        </li>
        <li>
          <button type="button">
            <TrashCanIcon />
            Excluir
          </button>
        </li>
      </ActionsMenu>
    );
  }

  function renderOrder() {
    return (
      <>
        <Order>
          <li className="id">#ID</li>
          <li className="avatar">Foto</li>
          <li className="name">Nome</li>
          <li className="email">Email</li>
          <li className="actions">{renderActions()}</li>
        </Order>
        <Order>
          <li className="id">#ID</li>
          <li className="avatar">Foto</li>
          <li className="name">Nome</li>
          <li className="email">Email</li>
          <li className="actions">{renderActions()}</li>
        </Order>
      </>
    );
  }

  return (
    <Container>
      <Header>
        <li className="id">ID</li>
        <li className="avatar">Foto</li>
        <li className="name">Nome</li>
        <li className="email">Email</li>
        <li className="actions">Ações</li>
      </Header>
      <Content>
        <li>{renderOrder()}</li>
      </Content>
    </Container>
  );
}

import React from 'react';

import ActionsMenu from 'components/ActionsMenu';
import EyeIcon from 'assets/icons/Eye';
import PenIcon from 'assets/icons/Pen';
import TrashCanIcon from 'assets/icons/TrashCan';
import { Container, Header, Content, Order } from './styles';

export default function OrdersList() {
  function renderActions() {
    return (
      <ActionsMenu>
        <li>
          <button type="button">
            <EyeIcon />
            Visualizar
          </button>
        </li>
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
          <li className="recipient">Destinatário</li>
          <li className="deliveryman">Entregador</li>
          <li className="city">Cidade</li>
          <li className="state">Estado</li>
          <li className="status">Status</li>
          <li className="actions">{renderActions()}</li>
        </Order>
        <Order>
          <li className="id">#ID</li>
          <li className="recipient">Destinatário</li>
          <li className="deliveryman">Entregador</li>
          <li className="city">Cidade</li>
          <li className="state">Estado</li>
          <li className="status">Status</li>
          <li className="actions">{renderActions()}</li>
        </Order>
      </>
    );
  }

  return (
    <Container>
      <Header>
        <li className="id">ID</li>
        <li className="recipient">Destinatário</li>
        <li className="deliveryman">Entregador</li>
        <li className="city">Cidade</li>
        <li className="state">Estado</li>
        <li className="status">Status</li>
        <li className="actions">Ações</li>
      </Header>
      <Content>
        <li>{renderOrder()}</li>
      </Content>
    </Container>
  );
}

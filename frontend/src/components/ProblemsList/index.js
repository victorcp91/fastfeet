import React from 'react';

import ActionsMenu from 'components/ActionsMenu';
import EyeIcon from 'assets/icons/Eye';
import TrashCanIcon from 'assets/icons/TrashCan';
import { Container, Header, Content, Order } from './styles';

export default function RecipientsList() {
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
            <TrashCanIcon />
            Cancelar encomenda
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
          <li className="problem">Problema</li>
          <li className="actions">{renderActions()}</li>
        </Order>
        <Order>
          <li className="id">#ID</li>
          <li className="problem">Problema</li>
          <li className="actions">{renderActions()}</li>
        </Order>
      </>
    );
  }

  return (
    <Container>
      <Header>
        <li className="id">Encomenda</li>
        <li className="problem">Problema</li>
        <li className="actions">Ações</li>
      </Header>
      <Content>
        <li>{renderOrder()}</li>
      </Content>
    </Container>
  );
}

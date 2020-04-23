import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ActionsMenu from 'components/ActionsMenu';
import PenIcon from 'assets/icons/Pen';
import TrashCanIcon from 'assets/icons/TrashCan';
import Loading from 'components/Loading';
import { toast } from 'react-toastify';
import api from 'services/api';
import { loadRecipients } from 'store/modules/recipients/actions';

import { Container, Header, Content, Order } from './styles';

export default function RecipientsList({ editRecipient }) {
  const { loading, data: recipients } = useSelector(
    (state) => state.recipients
  );

  const dispatch = useDispatch();

  async function deleteRecipient(id) {
    try {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(
        'Tem certeza que deseja excluir o destinatário?'
      );
      if (confirm) {
        await api.delete(`/recipients/${id}`);
        toast.success('Destinatário excluido com sucesso');
        dispatch(loadRecipients());
      }
    } catch (err) {
      toast.error('Não foi possível excluir o destinatário');
    }
  }

  function renderActions(id) {
    return (
      <ActionsMenu>
        <li>
          <button type="button" onClick={() => editRecipient(id)}>
            <PenIcon />
            Editar
          </button>
        </li>
        <li>
          <button type="button" onClick={() => deleteRecipient(id)}>
            <TrashCanIcon />
            Excluir
          </button>
        </li>
      </ActionsMenu>
    );
  }

  function renderRecipients() {
    return loading ? (
      <Loading />
    ) : (
      recipients.map((recipient) => (
        <Order key={recipient.id.toString()}>
          <li className="id">
            #{recipient.id < 10 ? `0${recipient.id}` : recipient.id}
          </li>
          <li className="name">{recipient.name}</li>
          <li className="address">
            {recipient.street}, {recipient.number}
            {recipient.complement ? `- ${recipient.complement}` : ''},{' '}
            {recipient.city} - {recipient.state}
          </li>
          <li className="actions">{renderActions(recipient.id)}</li>
        </Order>
      ))
    );
  }

  return (
    <Container>
      <Header>
        <li className="id">ID</li>
        <li className="name">Nome</li>
        <li className="address">Endereço</li>
        <li className="actions">Ações</li>
      </Header>
      <Content>
        <li>{renderRecipients()}</li>
      </Content>
    </Container>
  );
}

RecipientsList.propTypes = {
  editRecipient: PropTypes.func.isRequired,
};

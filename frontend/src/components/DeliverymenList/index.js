import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import ActionsMenu from 'components/ActionsMenu';
import PenIcon from 'assets/icons/Pen';
import TrashCanIcon from 'assets/icons/TrashCan';
import Loading from 'components/Loading';
import { avatarColors } from 'libs/variables';

import api from 'services/api';
import { loadDeliverymen } from 'store/modules/deliverymen/actions';
import {
  Container,
  Header,
  Content,
  Order,
  LetterAvatar,
  Avatar,
} from './styles';

export default function DeliverymenList({ editDeliveryman }) {
  const { loading, data: deliverymen } = useSelector(
    (state) => state.deliverymen
  );

  const dispatch = useDispatch();

  async function deleteDeliveryman(id) {
    try {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm(
        'Tem certeza que deseja excluir o entregador ?'
      );
      if (confirm) {
        await api.delete(`/recipients/${id}`);
        toast.success('Entregador excluido com sucesso');
        dispatch(loadDeliverymen());
      }
    } catch (err) {
      toast.error('Não foi possível excluir o entregador');
    }
  }

  function renderActions(id) {
    return (
      <ActionsMenu>
        <li>
          <button type="button" onClick={() => editDeliveryman(id)}>
            <PenIcon />
            Editar
          </button>
        </li>
        <li>
          <button type="button" onClick={() => deleteDeliveryman(id)}>
            <TrashCanIcon />
            Excluir
          </button>
        </li>
      </ActionsMenu>
    );
  }

  function renderAvatar(deliveryman, index) {
    if (deliveryman.avatar) {
      return <Avatar src={deliveryman.avatar.url} alt="avatar" />;
    }
    const names = deliveryman.name.split(' ');
    let initials = names[0][0];
    if (names[1]) {
      initials += names[1][0];
    } else {
      initials += names[0][1];
    }

    return (
      <LetterAvatar style={avatarColors[index % avatarColors.length]}>
        {initials.toUpperCase()}
      </LetterAvatar>
    );
  }

  function renderDeliverymen() {
    return loading ? (
      <Loading />
    ) : (
      deliverymen.map((deliveryman, index) => (
        <Order>
          <li className="id">
            #{deliveryman.id < 10 ? `0${deliveryman.id}` : deliveryman.id}
          </li>
          <li className="avatar">{renderAvatar(deliveryman, index)}</li>
          <li className="name">{deliveryman.name}</li>
          <li className="email">{deliveryman.email}</li>
          <li className="actions">{renderActions(deliveryman.id)}</li>
        </Order>
      ))
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
        <li>{renderDeliverymen()}</li>
      </Content>
    </Container>
  );
}

DeliverymenList.propTypes = {
  editDeliveryman: PropTypes.func.isRequired,
};

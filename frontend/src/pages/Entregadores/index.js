import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import DeliverymanList from 'components/DeliverymenList';
import PlusIcon from 'assets/icons/Plus';
import DeliverymenRegisterForm from 'components/DeliverymenRegisterForm';

import { loadDeliverymen } from 'store/modules/deliverymen/actions';
import useDebounce from 'libs/use-debounce';
import { ActionsContainer } from './styles';

export default function Entregadores() {
  const dispatch = useDispatch();
  const { data: deliverymen } = useSelector((state) => state.deliverymen);

  const [activeSection, setActiveSection] = useState('view');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingDeliveryman, setEditingDeliveryman] = useState();

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (!searchQuery) {
      dispatch(loadDeliverymen());
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (debouncedSearchQuery === searchQuery) {
      dispatch(loadDeliverymen(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery, searchQuery, dispatch]);

  useEffect(() => {
    if (activeSection === 'view') {
      setEditingDeliveryman();
    }
  }, [activeSection]);

  function editDeliveryman(id) {
    const recipient = deliverymen.find((del) => del.id === id);
    setEditingDeliveryman(recipient);
    setActiveSection('register');
  }

  return (
    <>
      {activeSection === 'view' && (
        <>
          <SectionTitle title="Gerenciando entregadores" />
          <ActionsContainer>
            <SearchInput
              placeholder="Buscar por entregadores"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />

            <Button
              icon={PlusIcon}
              text="CADASTRAR"
              onClick={() => setActiveSection('register')}
            />
          </ActionsContainer>
          <DeliverymanList editDeliveryman={editDeliveryman} />
        </>
      )}
      {activeSection === 'register' && (
        <DeliverymenRegisterForm
          back={() => setActiveSection('view')}
          editingDeliveryman={editingDeliveryman}
        />
      )}
    </>
  );
}

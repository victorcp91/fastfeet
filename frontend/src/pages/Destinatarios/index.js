import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import PlusIcon from 'assets/icons/Plus';
import RecipientRegisterForm from 'components/RecipientRegisterForm';
import RecipientsList from 'components/RecipientsList';

import { loadRecipients } from 'store/modules/recipients/actions';
import useDebounce from 'libs/use-debounce';
import { ActionsContainer } from './styles';

export default function Destinatários() {
  const dispatch = useDispatch();
  const { data: recipients } = useSelector((state) => state.recipients);

  const [activeSection, setActiveSection] = useState('view');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingRecipient, setEditingRecipient] = useState();

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (!searchQuery) {
      dispatch(loadRecipients());
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (debouncedSearchQuery === searchQuery) {
      dispatch(loadRecipients(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery, searchQuery, dispatch]);

  useEffect(() => {
    if (activeSection === 'view') {
      setEditingRecipient();
    }
  }, [activeSection]);

  function editRecipient(id) {
    const recipient = recipients.find((rec) => rec.id === id);
    setEditingRecipient(recipient);
    setActiveSection('register');
  }

  return (
    <>
      {activeSection === 'view' && (
        <>
          <SectionTitle title="Gerenciando destinatários" />
          <ActionsContainer>
            <SearchInput
              placeholder="Buscar por destinatários"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />

            <Button
              icon={PlusIcon}
              text="CADASTRAR"
              onClick={() => setActiveSection('register')}
            />
          </ActionsContainer>
          <RecipientsList editRecipient={editRecipient} />
        </>
      )}
      {activeSection === 'register' && (
        <RecipientRegisterForm
          back={() => setActiveSection('view')}
          editingRecipient={editingRecipient}
        />
      )}
    </>
  );
}

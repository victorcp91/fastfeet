import React, { useState } from 'react';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import PlusIcon from 'assets/icons/Plus';
import RecipientRegisterForm from 'components/RecipientRegisterForm';
import RecipientsList from 'components/RecipientsList';

import { ActionsContainer } from './styles';

export default function Destinatários() {
  const [activeSection, setActiveSection] = useState('view');
  return (
    <>
      {activeSection === 'view' && (
        <>
          <SectionTitle title="Gerenciando destinatários" />
          <ActionsContainer>
            <SearchInput placeholder="Buscar por destinatários" />

            <Button
              icon={PlusIcon}
              text="CADASTRAR"
              onClick={() => setActiveSection('register')}
            />
          </ActionsContainer>
          <RecipientsList />
        </>
      )}
      {activeSection === 'register' && (
        <RecipientRegisterForm back={() => setActiveSection('view')} />
      )}
    </>
  );
}

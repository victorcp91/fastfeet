import React, { useState } from 'react';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import PlusIcon from 'assets/icons/Plus';
import OrdersList from 'components/OrdersList';
import OrderRegisterForm from 'components/OrderRegisterForm';

import { ActionsContainer } from './styles';

export default function Home() {
  const [activeSection, setActiveSection] = useState('view');
  return (
    <>
      {activeSection === 'view' && (
        <>
          <SectionTitle title="Gerenciando encomendas" />
          <ActionsContainer>
            <SearchInput placeholder="Buscar por encomendas" />
            <Button
              icon={PlusIcon}
              text="CADASTRAR"
              onClick={() => setActiveSection('register')}
            />
          </ActionsContainer>
          <OrdersList />
        </>
      )}
      {activeSection === 'register' && (
        <OrderRegisterForm
          back={() => setActiveSection('view')}
          update={() => {}}
        />
      )}
    </>
  );
}

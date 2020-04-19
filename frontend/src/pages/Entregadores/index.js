import React, { useState } from 'react';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import DeliverymanList from 'components/DeliverymanList';
import PlusIcon from 'assets/icons/Plus';
import DeliverymenRegisterForm from 'components/DeliverymenRegisterForm';

import { ActionsContainer } from './styles';

export default function Entregadores() {
  const [activeSection, setActiveSection] = useState('view');
  return (
    <>
      {activeSection === 'view' && (
        <>
          <SectionTitle title="Gerenciando entregadores" />
          <ActionsContainer>
            <SearchInput placeholder="Buscar por entregadores" />

            <Button
              icon={PlusIcon}
              text="CADASTRAR"
              onClick={() => setActiveSection('register')}
            />
          </ActionsContainer>
          <DeliverymanList />
        </>
      )}
      {activeSection === 'register' && (
        <DeliverymenRegisterForm back={() => setActiveSection('view')} />
      )}
    </>
  );
}

import React from 'react';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';

// import { Container } from './styles';

export default function Entregadores() {
  return (
    <>
      <SectionTitle title="Gerenciando entregadores" />
      <SearchInput placeholder="Buscar por entregadores" />
    </>
  );
}

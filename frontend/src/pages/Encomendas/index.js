import React from 'react';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';

export default function Home() {
  return (
    <>
      <SectionTitle title="Gerenciando encomendas" />
      <SearchInput placeholder="Buscar por encomendas" />
    </>
  );
}

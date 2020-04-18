import React from 'react';

import SectionTitle from 'components/SectionTitle';
import SearchInput from 'components/SearchInput';

export default function Destinatários() {
  return (
    <>
      <SectionTitle title="Gerenciando de destinatários" />
      <SearchInput placeholder="Buscar por destinatários" />
    </>
  );
}

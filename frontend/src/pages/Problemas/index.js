import React from 'react';

import SectionTitle from 'components/SectionTitle';
import ProblemsList from 'components/ProblemsList';
// import { Container } from './styles';

export default function Problemas() {
  return (
    <>
      <SectionTitle title="Problemas na entrega" />
      <ProblemsList />
    </>
  );
}

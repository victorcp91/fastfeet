import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import Select from 'components/Select';
import ArrowIcon from 'assets/icons/Arrow';
import CheckIcon from 'assets/icons/Check';
import { colors } from 'libs/variables';
import {
  Container,
  Header,
  FieldsContainer,
  Selects,
  InputContainer,
  Label,
} from './styles';

const schema = Yup.object().shape({
  recipient: Yup.object().required(),
  deliveryman: Yup.object().required(),
  productName: Yup.string()
    .min(3, 'O nome precisa ter, no mínimo, 3 caracteres')
    .required('Informe o nome do produto'),
});

export default function OrderRegisterForm({ back }) {
  const loadRecipients = (inputValue, callback) => {
    callback([
      { value: 1, label: 'Victor' },
      { value: 2, label: 'Thales' },
    ]);
  };

  const loadDeliverymen = (inputValue, callback) => {
    callback([
      { value: 1, label: 'Victor' },
      { value: 2, label: 'Thales' },
    ]);
  };

  const handleSubmit = () => {};

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <SectionTitle title="Cadastro de encomendas" />
          <div className="buttons">
            <Button
              icon={ArrowIcon}
              backgroundColor={colors.lightGray}
              text="VOLTAR"
              onClick={back}
            />
            <Button icon={CheckIcon} text="SALVAR" />
          </div>
        </Header>
        <FieldsContainer>
          <Selects>
            <div className="select-container">
              <Label htmlFor="recipient"> Destinatário </Label>
              <Select
                name="recipient"
                cacheOptions
                loadOptions={loadRecipients}
                defaultOptions
                placeholder="Selecione"
                id="recipient"
              />
            </div>
            <div className="select-container">
              <Label htmlFor="email"> Entregador </Label>
              <Select
                name="deliveryman"
                cacheOptions
                loadOptions={loadDeliverymen}
                defaultOptions
                placeholder="Selecione"
              />
            </div>
          </Selects>
          <InputContainer className="input-container">
            <Label htmlFor="productName"> Nome do Produto </Label>
            <Input id="productName" name="productName" />
          </InputContainer>
        </FieldsContainer>
      </Form>
    </Container>
  );
}

OrderRegisterForm.propTypes = {
  back: PropTypes.func.isRequired,
  // update: PropTypes.func.isRequired,
};

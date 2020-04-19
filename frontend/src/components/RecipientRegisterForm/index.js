import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import ArrowIcon from 'assets/icons/Arrow';
import CheckIcon from 'assets/icons/Check';
import { colors } from 'libs/variables';
import {
  Container,
  Header,
  FieldsContainer,
  NameInputContainer,
  AddressInputsContainer,
  CityInfoContainer,
  InputContainer,
  Label,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  street: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('Campo obrigatório'),
  state: Yup.string().required('Campo obrigatório'),
  cep: Yup.string().required('Campo obrigatório'),
});

export default function OrderRegisterForm({ back }) {
  // const loadRecipients = (inputValue, callback) => {
  //   callback([
  //     { value: 1, label: 'Victor' },
  //     { value: 2, label: 'Thales' },
  //   ]);
  // };

  // const loadDeliverymen = (inputValue, callback) => {
  //   callback([
  //     { value: 1, label: 'Victor' },
  //     { value: 2, label: 'Thales' },
  //   ]);
  // };

  const handleSubmit = () => {};

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <SectionTitle title="Cadastro de destinatário" />
          <div className="buttons">
            <Button
              icon={ArrowIcon}
              backgroundColor={colors.lightGray}
              text="VOLTAR"
              onClick={back}
            />
            <Button icon={CheckIcon} text="SALVAR" type="submit" />
          </div>
        </Header>
        <FieldsContainer>
          <NameInputContainer>
            <InputContainer className="street">
              <Label htmlFor="name"> Nome </Label>
              <Input id="name" name="name" />
            </InputContainer>
          </NameInputContainer>
          <AddressInputsContainer>
            <InputContainer className="street">
              <Label htmlFor="street"> Rua </Label>
              <Input id="street" name="street" />
            </InputContainer>
            <InputContainer className="number">
              <Label htmlFor="number"> Número </Label>
              <Input id="number" name="number" />
            </InputContainer>
            <InputContainer className="complement">
              <Label htmlFor="complement"> Complemento </Label>
              <Input id="complement" name="complement" />
            </InputContainer>
          </AddressInputsContainer>
          <CityInfoContainer>
            <InputContainer className="city">
              <Label htmlFor="city"> Cidade </Label>
              <Input id="city" name="city" />
            </InputContainer>
            <InputContainer className="state">
              <Label htmlFor="state"> EStado </Label>
              <Input id="state" name="state" />
            </InputContainer>
            <InputContainer className="cep">
              <Label htmlFor="cep"> CEP </Label>
              <Input id="cep" name="cep" />
            </InputContainer>
          </CityInfoContainer>
        </FieldsContainer>
      </Form>
    </Container>
  );
}

OrderRegisterForm.propTypes = {
  back: PropTypes.func.isRequired,
  // update: PropTypes.func.isRequired,
};

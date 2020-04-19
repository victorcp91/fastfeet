import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import ImageInput from 'components/ImageInput';
import ArrowIcon from 'assets/icons/Arrow';
import CheckIcon from 'assets/icons/Check';
import { colors } from 'libs/variables';
import {
  Container,
  Header,
  FieldsContainer,
  InputContainer,
  Label,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
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

  // const fileValidation = () => {};

  const handleSubmit = () => {};

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <SectionTitle title="Cadastro de entregadores" />
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
          <ImageInput name="avatar" />
          <InputContainer className="input-container">
            <Label htmlFor="name"> Nome </Label>
            <Input id="name" name="name" />
          </InputContainer>
          <InputContainer className="input-container">
            <Label htmlFor="email"> Email </Label>
            <Input id="email" name="email" type="email" />
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

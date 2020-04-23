import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import ArrowIcon from 'assets/icons/Arrow';
import CheckIcon from 'assets/icons/Check';
import Loading from 'components/Loading';

import api from 'services/api';
import { loadRecipients } from 'store/modules/recipients/actions';
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
  LoadingContainer,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  street: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('Campo obrigatório'),
  state: Yup.string().required('Campo obrigatório'),
  zipCode: Yup.string().required('Campo obrigatório'),
});

export default function RedicpientRegisterForm({ back, editingRecipient }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    { name, street, number, complement, state, city, zipCode },
    { resetForm }
  ) {
    if (editingRecipient) {
      try {
        setLoading(true);
        await api.put(`/recipients/${editingRecipient.id}`, {
          name,
          street,
          number,
          complement,
          state,
          city,
          zip_code: zipCode,
        });
        toast.success('Destinatário atualizado com sucesso');
        resetForm();
        dispatch(loadRecipients());
        back();
      } catch (err) {
        toast.error('Não foi possível atualizar o destinatário');
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        await api.post('/recipients', {
          name,
          street,
          number,
          complement,
          state,
          city,
          zip_code: zipCode,
        });
        toast.success('Destinatário cadastrado com sucesso');
        resetForm();
        dispatch(loadRecipients());
      } catch (err) {
        toast.error('Não foi possível cadastrar o destinatário');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={
          editingRecipient
            ? {
                ...editingRecipient,
                zipCode: editingRecipient.zip_code,
              }
            : false
        }
      >
        <Header>
          <SectionTitle
            title={
              editingRecipient
                ? 'Edição de destinatário'
                : 'Cadastro de destinatário'
            }
          />
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
              <Label htmlFor="state"> Estado </Label>
              <Input id="state" name="state" />
            </InputContainer>
            <InputContainer className="cep">
              <Label htmlFor="cep"> CEP </Label>
              <Input id="cep" name="zipCode" />
            </InputContainer>
          </CityInfoContainer>
        </FieldsContainer>
      </Form>
      {loading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}

RedicpientRegisterForm.propTypes = {
  back: PropTypes.func.isRequired,
  editingRecipient: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape]),
};

RedicpientRegisterForm.defaultProps = {
  editingRecipient: false,
};

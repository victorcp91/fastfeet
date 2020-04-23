import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import ImageInput from 'components/ImageInput';
import ArrowIcon from 'assets/icons/Arrow';
import CheckIcon from 'assets/icons/Check';
import Loading from 'components/Loading';

import { colors } from 'libs/variables';
import api from 'services/api';
import { loadDeliverymen } from 'store/modules/deliverymen/actions';

import {
  Container,
  Header,
  FieldsContainer,
  InputContainer,
  Label,
  LoadingContainer,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
});

export default function OrderRegisterForm({ back, editingDeliveryman }) {
  const dispatch = useDispatch();

  const [imageFile, setImageFile] = useState();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(info, { resetForm }) {
    const { name, email } = info;
    let file;

    if (imageFile) {
      const formData = new FormData();
      formData.set('file', imageFile);
      try {
        file = await api.post('/files', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } catch (err) {
        toast.error('Não foi possível salvar a foto do entregador');
      } finally {
        setLoading(false);
      }
    }

    if (editingDeliveryman) {
      try {
        setLoading(true);
        if (file) {
          await api.put(`/deliverymen/${editingDeliveryman.id}`, {
            name,
            email,
            avatar_id: file.data.id,
          });
        } else {
          await api.put(`/deliverymen/${editingDeliveryman.id}`, {
            name,
            email,
          });
        }

        toast.success('Entregador atualizado com sucesso');
        dispatch(loadDeliverymen());
        back();
      } catch (err) {
        toast.error('Não foi possível atualizar o destinatário');
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        if (file) {
          await api.post('/deliverymen', {
            name,
            email,
            avatar_id: file.data.id,
          });
        } else {
          await api.post('/deliverymen', {
            name,
            email,
          });
        }

        toast.success('Entregador cadastrado com sucesso');
        resetForm();
        dispatch(loadDeliverymen());
      } catch (err) {
        toast.error('Não foi possível cadastrar o entregador');
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
        initialData={editingDeliveryman ? { ...editingDeliveryman } : false}
      >
        <Header>
          <SectionTitle
            title={
              editingDeliveryman
                ? 'Edição de entregador'
                : 'Cadastro de entregador'
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
          <ImageInput
            initialValue={
              editingDeliveryman && editingDeliveryman.avatar
                ? editingDeliveryman.avatar.url
                : ''
            }
            onChange={setImageFile}
          />
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
      {loading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}

OrderRegisterForm.propTypes = {
  back: PropTypes.func.isRequired,
  editingDeliveryman: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape]),
};

OrderRegisterForm.defaultProps = {
  editingDeliveryman: false,
};

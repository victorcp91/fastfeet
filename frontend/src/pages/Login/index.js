import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import logo from 'assets/images/fastfeet-logo.png';
import { signInRequest } from 'store/modules/auth/actions';

import { Container, SubmitButton, Logo } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Logo src={logo} />
        <div className="input-container">
          <label htmlFor="email"> SEU E-MAIL </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password"> SUA SENHA</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*************"
          />
        </div>
        <SubmitButton>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}

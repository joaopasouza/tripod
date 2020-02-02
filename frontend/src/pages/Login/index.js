import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import validateSchema from './validate';
import { login } from '../../services/userService';

import './styles.css';

function Login() {
  const [message, setMessage] = useState('');

  const { handleSubmit, register, errors } = useForm({
    validationSchema: validateSchema,
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    const [res, err] = await login(data);
    if (res) {
      localStorage.setItem('loggedIn', res.token);
      history.push('/');
    } else {
      console.log(err);
      setMessage('Usuário não encontrado!');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/">
            <b>Med</b>Sênior
          </Link>
        </div>

        <div className="login-box-body">
          <p className="login-box-msg">Faça login para iniciar sua sessão</p>
          
          {message && <p className="login-box-msg text-danger">{message}</p>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              register={register}
              error={errors.email && errors.email.message}
            />

            <Input
              type="password"
              name="password"
              placeholder="Senha"
              register={register}
              error={errors.password && errors.password.message}
            />

            <div className="form-group">
              <Button type="submit" label="Entrar" color="olive" block flat>
                <i className="fa fa-fw fa-sign-in"></i>
              </Button>
            </div>
          </form>

          <Link to="/register" className="text-center">
            Registrar um novo usuário
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import validateSchema from './validate';
import { create } from '../../services/userService';

import './styles.css';

function Register() {
  const [message, setMessage] = useState('');
  const history = useHistory();

  const { handleSubmit, register, errors } = useForm({
    validationSchema: validateSchema,
  });

  const onSubmit = async (data) => {
    const [res, err] = await create(data);
    if (res) {
      history.push('/login');
    } else {
      setMessage('Erro na criação da nova conta de usuário.');
      console.log(err);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <div className="register-logo">
          <Link to="/">
            <b>Med</b>Sênior
          </Link>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Registrar um novo usuário</p>

          {message && <p className="login-box-msg text-danger">{message}</p>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="username"
              placeholder="Usuário"
              register={register}
              error={errors.username && errors.username.message}
            />

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

            <Input
              type="password"
              name="repeatPassword"
              placeholder="Repetir Senha"
              register={register}
              error={errors.repeatPassword && errors.repeatPassword.message}
            />

            <div className="form-group">
              <Button type="submit" label="Registrar" color="olive" block flat>
                <i className="fa fa-fw fa-save"></i>
              </Button>
            </div>
          </form>

          <Link to="/login" className="text-center">
            Eu já tenho um usuário
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

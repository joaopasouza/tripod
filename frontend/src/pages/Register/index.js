import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import validateSchema from './validate';

import './styles.css';

function Register() {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: validateSchema,
  });

  const onSubmit = (data) => {
    console.log(data);
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="fullName"
              placeholder="Nome Completo"
              register={register}
              error={errors.fullName && errors.fullName.message}
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

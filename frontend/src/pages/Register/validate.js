import * as Yup from 'yup';

export default Yup.object().shape({
  fullName: Yup.string()
    .required('Preenchimento obrigatório')
    .min(10, 'Deve conter no mínimo 10 caracteres')
    .max(50, 'Deve conter no máximo 50 caracteres'),
  email: Yup.string()
    .email('Endereço de email válido')
    .required('Preenchimento obrigatório'),
  password: Yup.string()
    .required('Preenchimento obrigatório')
    .min(6, 'Deve conter no mínimo 6 caracteres'),
  repeatPassword: Yup.string()
    .required('Preenchimento obrigatório')
    .oneOf([Yup.ref('password')], 'As senhas não correspondem'),
});

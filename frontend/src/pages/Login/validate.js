import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Endereço de email válido')
    .required('Preenchimento obrigatório'),
  password: Yup.string()
    .required('Preenchimento obrigatório')
    .min(6, 'Deve conter no mínimo 6 caracteres'),
});

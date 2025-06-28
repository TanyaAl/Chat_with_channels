import * as yup from 'yup';

const getChannelValidation = (names) => {
  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .required('Имя обязательно')
      .min(3, 'Имя должно быть не менее 3 символов')
      .max(20, 'Имя должно быть не более 20 символов')
      .notOneOf(names, 'Имя канала уже существует'),
  });
};

const getSignUpValidation = () => {
  return yup.object().shape({
    username: yup
      .string()
      .required('Имя обязательно')
      .min(3, 'Имя должно быть не менее 3 символов')
      .max(20, 'Имя должно быть не более 20 символов'),
    password: yup
      .string()
      .required('Пароль обязателен')
      .min(6, 'Пароль не короче 6 символов'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  });
};

export { getChannelValidation, getSignUpValidation };

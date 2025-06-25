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

export default getChannelValidation;

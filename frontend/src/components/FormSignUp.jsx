import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { getSignUpValidation } from '../../utils/validation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/index.jsx';
import { useTranslation } from 'react-i18next';

const FormSignUp = () => {
  const inputEl = useRef(null);
  const navigate = useNavigate();
  const auth = useAuth();
  const { t } = useTranslation();
  useEffect(() => inputEl.current.focus(), []);
  const validationSchema = getSignUpValidation(t);

  const formik = useFormik({
    initialValues: { username: '', password: '', repeatPassword: '' },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/signup', {
          username: values.username,
          password: values.password,
        });
        console.log('NEWUSER', response);
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        navigate('/');
        formik.resetForm();
      } catch (err) {
        console.error(t('network'), err);
        if (err.response && err.response.status === 409) {
          formik.setFieldError('username', t('validation.withoutDoubles'));
        }
        throw err;
      }
    },
  });
  console.log('Форма валидна:', formik.isValid, 'Ошибки:', formik.errors);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Form onSubmit={formik.handleSubmit} className="p-3">
            <fieldset>
              <h1 className="text-center mb-4">Регистрация</h1>
              <Form.Group className="form-floating mb-3">
                <Form.Control
                  onChange={(e) => {
                    formik.setFieldTouched('username', true, false);
                    formik.handleChange(e);
                  }}
                  placeholder="Имя пользователя"
                  value={formik.values.username}
                  ref={inputEl}
                  type="text"
                  name="username"
                  required
                  onBlur={formik.onBlur}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-danger">{formik.errors.username}</div>
                )}
                <Form.Label htmlFor="username">Имя пользователя</Form.Label>
              </Form.Group>
              <Form.Group className="form-floating mb-3">
                <Form.Control
                  className="mb-3"
                  onChange={(e) => {
                    formik.setFieldTouched('password', true, false);
                    formik.handleChange(e);
                  }}
                  placeholder="Пароль"
                  value={formik.values.password}
                  type="password"
                  name="password"
                  required
                  onBlur={formik.onBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger">{formik.errors.password}</div>
                )}
                <Form.Label htmlFor="password">Пароль</Form.Label>
              </Form.Group>
              <Form.Group className="form-floating mb-4">
                <Form.Control
                  onChange={formik.handleChange}
                  placeholder="Повторите пароль"
                  value={formik.values.repeatPassword}
                  type="password"
                  name="repeatPassword"
                  required
                  onBlur={formik.onBlur}
                />
                {formik.touched.repeatPassword &&
                  formik.errors.repeatPassword && (
                    <div className="text-danger">
                      {formik.errors.repeatPassword}
                    </div>
                  )}
                <Form.Label htmlFor="repeatPassword">
                  Повторите пароль
                </Form.Label>
              </Form.Group>
              <Button
                type="submit"
                variant="outline-primary"
                className="w-100 btn"
              >
                {t('interface_texts.signupBtn')}
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;

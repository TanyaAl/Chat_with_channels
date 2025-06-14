import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/index.jsx';

const FormPage = () => {
  const inputEl = useRef(null);
  const navigate = useNavigate();
  const auth = useAuth();
  console.log('auth', auth);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/login', {
          username: values.username,
          password: values.password,
        });
        console.log('response', response);
        localStorage.setItem('user', JSON.stringify(response.data));
        auth.logIn();
        console.log('stateAuth', auth.loggedIn);
        navigate('/');
      } catch (err) {
        formik.setErrors({ auth: 'Неверные имя пользователя или пароль' });
        if (err.isAxiosError && err.response.status === 401) {
          inputEl.current.select();
        }
        throw err;
      }
    },
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center pt-5">
        <div className="col-sm-12">
          <Form onSubmit={formik.handleSubmit} className="p-3">
            <fieldset>
              <Form.Group>
                <Form.Label htmlFor="username">Ник</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  placeholder="username"
                  value={formik.values.username}
                  ref={inputEl}
                  type="text"
                  name="username"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Пароль</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  placeholder="password"
                  value={formik.values.password}
                  type="password"
                  name="password"
                  required
                />
                {formik.errors.auth && (
                  <div className="text-center text-danger">
                    {formik.errors.auth}
                  </div>
                )}
              </Form.Group>
              <Button type="submit" className="w-100 mb-3 mt-3 btn btn-primary">
                Войти
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const FormSignUp = () => {
  const inputEl = useRef(null);
  //   const navigate = useNavigate();

  useEffect(() => inputEl.current.focus());

  const formik = useFormik({
    initialValues: { username: '', password: '', repeatPassword: '' },
    onSubmit: (values) => console.log(values),
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

export default FormSignUp;

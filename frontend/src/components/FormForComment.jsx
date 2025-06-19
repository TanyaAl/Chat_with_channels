import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect } from 'react';

const FormForComment = () => {
  const inputEl = useRef(null);
  useEffect(() => inputEl.current.focus(), []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  const isSubmitDisabled = formik.values.body.trim() === '';

  return (
    <div className="mt-auto py-3">
      <Form onSubmit={formik.handleSubmit} className="py-1 border rounded-2">
        <div className="input-group has-validation">
          <Form.Control
            onChange={formik.handleChange}
            className="border-0 p-0 ps-2 form-control"
            placeholder="Введите сообщение..."
            aria-label="Новое сообщение"
            value={formik.values.body}
            ref={inputEl}
            type="text"
            name="body"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitDisabled}
            className="btn-group-vertical"
            aria-label="Отправить"
            variant="outline-primary"
          >
            <i className="bi bi-send"></i>
            <span className="visually-hidden">Отправить</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormForComment;

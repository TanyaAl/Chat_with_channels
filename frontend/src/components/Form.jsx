import { Formik, Form, Field } from 'formik';

const FormPage = () => {
    return (
        <Formik initialValues={{ nikName: "", password: "" }}>
        <Form>
            <div className="form-group">
                <label htmlFor="nikName">Ник</label>
                <Field
                type="text"
                name="nikName"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <Field
                type="password"
                name="password"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <button type="submit" 
                    className="w-100 mb-3 mt-3 btn btn-outline-primary">
                    Войти
                </button>
            </div>
        </Form>
        </Formik>  
    )
}

export default FormPage;
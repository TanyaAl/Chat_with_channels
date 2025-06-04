import { Formik, Form, Field } from 'formik';

const FormPage = () => {
    return (
        <Formik initialValues={{ nikName: "", password: "" }}>
        <Form>
            <div className="form-group">
                <label htmlFor="nikName">Email</label>
                <Field
                type="nikName"
                name="nikName"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                type="password"
                name="password"
                className="form-control"
                />
            </div>
        </Form>
        </Formik>  
    )
}

export default FormPage;
import { Formik, Form, Field } from 'formik';
import { useRef, useEffect } from 'react';

const FormPage = () => {
    const inputEl = useRef(null);
    useEffect(() => {
        inputEl.current.focus()
    }, []);
    
    return (
        <Formik initialValues={{ nikName: "", password: "" }}>
        <Form>
            <div className="form-group">
                <label htmlFor="nikName">Ник</label>
                <Field
                ref={inputEl}
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
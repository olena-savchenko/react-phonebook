import { Form, Formik, Field} from "formik";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

export default function ContactForm ({addContact}) {

    const idArt = nanoid();

    const handleSubmit= (values, actions) => {
        console.log("Submit", values);
        addContact({
            id: nanoid(),
            name: values.name,
            number: values.number
        })
        actions.resetForm();
    }

    return (
        <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit}>
            <Form className={css.container} autoComplete="off">
                <label htmlFor={`${idArt}-username`}>Username: </label>
                <Field type="text" name="name" id={`${idArt}-username`}/>
                <label htmlFor={`${idArt}-number`}>Number: </label>
                <Field type="number" name="number" id={`${idArt}-number`}/>
                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    )
}
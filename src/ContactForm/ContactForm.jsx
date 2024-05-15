import { Form, Formik, Field} from "formik";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

export default function ContactForm ({addContact}) {

    const handleSubmit= (values, actions) => {
        console.log("Submit", values);
        addContact({id: nanoid(),
            name: values.name,
            number: values.number
        });

        actions.resetForm();
    }

    return (
        <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit}>
            <Form className={css.container}>
                <label>Username: </label>
                <Field type="text" name="name"/>
                <label>Number: </label>
                <Field type="number" name="number"/>
                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    )
}
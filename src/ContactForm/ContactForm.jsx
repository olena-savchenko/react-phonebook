
import { Form, Formik, Field} from "formik";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

// хук useId для створення унікальних ідентифікаторів полів ФОРМИ
import { useId } from "react";

export default function ContactForm ({addContact}) {
    const nameFieldId = useId();
    const numberFieldId = useId();

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
                <label htmlFor={nameFieldId}>Username: </label>
                <Field type="text" name="name"  id={nameFieldId}/>
                <label htmlFor={numberFieldId}>Number: </label>
                <Field type="number" name="number" id={numberFieldId}/>
                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    )
}
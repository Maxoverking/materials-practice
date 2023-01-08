import { Formik,Form, Field} from 'formik';


export const MaterialForm = ({ addMaterial }) => {
    //забираем данные из формы
    const handleSubmit = (values, actions) => {
            addMaterial(values)
            actions.resetForm();
    }

     return (
        <Formik 
        initialValues={{ title: '', link: ''}}
        onSubmit={handleSubmit}>
            <Form>
                <label >
                    Title
                    <Field name="title" type="text"/>
                </label>
                <br />
                <label>
                    Link
                    <Field name="link" type="text"/>
                </label>
                <br />
                <button type="submit">Add material</button>
            </Form>
        </Formik>
    )
 }
 
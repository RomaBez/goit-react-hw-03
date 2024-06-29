import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { nanoid } from "nanoid";
import { useId } from "react";

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const DataValid = Yup.object().shape({
    name: Yup.string("Must be a string!")
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      DataValid={DataValid}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field id={nameId} name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field id={numberId} name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

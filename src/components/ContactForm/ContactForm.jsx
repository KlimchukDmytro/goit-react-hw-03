import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, options) => {
    onSubmit(values);
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    phonename: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long")
      .required("Required"),
    phonenumber: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long")
      .required("Required"),
  });

  const initialValues = {
    phonename: "",
    phonenumber: "",
  };

  return (
    <div className={s.wraper}>
      <Formik
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.imput} name="phonename" />
            <ErrorMessage
              name="phonename"
              component="span"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.imput} name="phonenumber" />
            <ErrorMessage
              name="phonenumber"
              component="span"
              className={s.error}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

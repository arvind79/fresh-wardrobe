import { useState } from "react";
import { useFormik } from "formik";

import "./style.css";
import { validateUserData } from "../utils/formValidation";
import InputField from "../inputField/InputField";

const fieldValues = [
  {
    name: "name",
    placeholder: "NAME",
    type: "text",
    id: 0,
  },
  {
    name: "email",
    placeholder: "EMAIL",
    type: "email",
    id: 1,
  },
  {
    name: "message",
    placeholder: "MESSAGE",
    type: "text",
    id: 2,
  },
];

const initialUserData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [userData, setUserData] = useState({});

  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialUserData,
    validationSchema: validateUserData,
    onSubmit: (values, action) => {
      setUserData(values);
      console.log("user Data saved is ", values);
      resetForm();
      alert("Thank You for Connecting, We'll be right back to you!");
    },
  });

  console.log("formik values: ", values);
  console.log("formik errors: ", errors);
  console.log("formik touched: ", touched);

  return (
    <section className="contact-section">
      <div className="form-section">
        <div className="form-title">
          <h4 className="title-name">Newslleter</h4>
          <p className="title-desc">
            Get news about articles and updates in your inbox.
          </p>
        </div>
        
        <form
          id="userData-form"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {fieldValues.map((field) => {
            return (
              <InputField
                key={field.id}
                {...field}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values[field.name]}
                errors={errors[field.name]}
                isTouched={touched[field.name]}
              />
            );
          })}
        </form>
      </div>

      <div className="contact-title">
        <h1>Get</h1>
        <h1>In</h1>
        <h1>Touch</h1>
        <button type="submit" form="userData-form" className="send-btn">Send</button>
      </div>
    </section>
  );
};

export default Contact;

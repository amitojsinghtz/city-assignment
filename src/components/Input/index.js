import React from "react";
import { Form } from "react-bootstrap";

export const FormInput = (props) => {
  const {
    name,
    type = "text",
    inputType,
    placeholder,
    label,
    values,
    errors,
    handleChange,
    touched,
    handleBlur,
    classes,
    style,
  } = props;

  console.log(values)

  return (
    <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          as={inputType}
          style={style}
        />
        {errors && touched[name] && errors[name] && (
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        )}
    </>
  );
};

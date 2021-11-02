import React from "react";
import { Form as BForm, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import { FormInput } from "../components/Input";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";

const FormSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  color: Yup.string().required("Color is required"),
});

const CityForm = (props) => {
  const { cities, cityData, handleFormSubmit, handleFormClose } = props;
  const initialValues = cityData || {
    title: "",
    description: "",
    color: "",
  };

  const submitCityHandler = (values) => {
    handleFormSubmit([
      ...cities,
      {
        title: values.title,
        description: values.description,
        color: values.color,
        id: nanoid(5),
      },
    ]);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          submitCityHandler(values);
          handleFormClose();
        }}
      >
        {(formProps) => {
          const { handleSubmit, isSubmitting, values } = formProps;
          return (
            <BForm onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <BForm.Group controlId="title">
                    <FormInput
                      shrink="true"
                      {...formProps}
                      name="title"
                      label="Title"
                      placeholder="Paris, London, New York.."
                    />
                  </BForm.Group>
                </Col>
                <Col md={6}>
                  <BForm.Group controlId="color">
                    <FormInput
                      shrink="true"
                      {...formProps}
                      name="color"
                      label="Color"
                      placeholder="#c0ff00, #0eafc1, #b7b1e9 .."
                    />
                  </BForm.Group>
                </Col>
                <Col md={12} className="pt-3"> 
                  <BForm.Group controlId="description">
                    <FormInput
                      shrink="true"
                      {...formProps}
                      name="description"
                      label="Description"
                      placeholder="type descrption here.."
                      inputType="textarea"
                    />
                  </BForm.Group>
                </Col>
                <Col md={12} className="pt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="mr-2"
                  >
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleFormClose}
                    disabled={isSubmitting}
                  >
                    Close
                  </Button>
                </Col>
              </Row>
            </BForm>
          );
        }}
      </Formik>
    </>
  );
};

export default CityForm;

import * as React from 'react';
import { TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            placeholder="first name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            placeholder="last name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

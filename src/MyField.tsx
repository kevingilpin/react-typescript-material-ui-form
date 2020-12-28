import * as React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@material-ui/core';

interface Props extends FieldProps {
  placeholder: string;
  label: string;
}

export const MyField: React.FC<Props> = ({ label, placeholder, field }) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};

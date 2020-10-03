import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';

export default function TextInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      variant='outlined'
      helperText={meta.touched && !!meta.error && meta.error}
    />
  );
}

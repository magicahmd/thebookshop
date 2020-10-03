import React from 'react';
import { useField, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TBSelect({ ...props }) {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <Autocomplete
      {...props}
      {...field}
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, selected) => option.value === selected.value}
      onChange={(_, value) => setFieldValue(props.name, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          error={meta.touched && !!meta.error}
          label={props.label}
          variant='outlined'
        />
      )}
    />
  );
}

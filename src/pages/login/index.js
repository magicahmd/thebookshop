import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import TextInput from '../../components/common/TextInput';
import { signInUser } from '../../store/actions/authActions';

function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          dispatch(signInUser(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form>
            <TextInput name='email' label='Email' />
            <TextInput name='password' label='Password' />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={!isValid || !dirty || isSubmitting}
            >
              Primary
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/common/TextInput';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions';

function CreateOrder() {
  const dispatch = useDispatch();
  const initialValues = {
    title: '',
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('error message'),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            dispatch(createOrder({...values, id: values.title}));
        }}
      >
        <Form>
          <TextInput name='title' label='order title' />
          <TextInput name='title' label='order title' />
          <Field name='title' placeholder='order title' />
          <ErrorMessage name='title' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateOrder;

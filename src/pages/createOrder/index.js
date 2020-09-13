import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/common/TextInput';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions';
import TBSelect from '../../components/common/TBSelect';

function CreateOrder() {
  const dispatch = useDispatch();
  const initialValues = {
    title: '',
    selectedOption: { title: 'The Shawshank Redemption', year: 1994 },
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('error message'),
  });
  const options = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
  ];
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(createOrder({ ...values, id: values.title }));
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form>
            <TextInput name='title' label='order title' />
            <TextInput name='title' label='order title' />
            <Field name='title' placeholder='order title' />
            <TBSelect name='selectedOption' options={options} label='country' />
            <ErrorMessage name='title' />
            <button type='submit' disabled={!isValid || !dirty || isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateOrder;

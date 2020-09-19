import React from 'react';
import { Formik, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/common/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, listenToOrders } from '../../store/actions/orderActions';
import TBSelect from '../../components/common/TBSelect';
import useFirestoreDoc from '../../hooks/useFirestoreDoc';
import {
  addOrderToFirestore,
  listenToOrdersFromFirestore,
} from '../../firestore/firestoreService';

function CreateOrder({ match, history }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.async);
  const initialValues = {
    name: '',
    books: [
      {
        title: '',
        price: '',
      },
    ],
    selectedOption: { title: 'The Shawshank Redemption', year: 1994 },
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('error message'),
    books: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().min(2, 'too short').required('Required'), // these constraints take precedence
          price: Yup.string().required('Required'), // these constraints take precedence
        })
      )
      .required('Must have books') // these constraints are shown if and only if inner constraints are satisfied
      .min(1, 'Minimum of one book'),
  });
  const options = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
  ];

  useFirestoreDoc({
    query: () => listenToOrdersFromFirestore(match.params.id),
    data: (order) => dispatch(listenToOrders([order])),
    deps: [match.params.id],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await addOrderToFirestore(values);
            setSubmitting(false);
            history.push('/');
          } catch (error) {
            console.log(error);
            setSubmitting(false);
          }
          dispatch(createOrder({ ...values, id: values.title }));
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form>
            <TextInput name='name' label='order title' />
            <br />
            <br />
            <FieldArray name='books'>
              {(fieldArrayProps) => {
                const { form, push, remove } = fieldArrayProps;
                const { values } = form;
                const { books } = values;
                return (
                  <div>
                    <button
                      type='button'
                      onClick={() =>
                        push({
                          title: '',
                          price: '',
                        })
                      }
                    >
                      add another book
                    </button>
                    {books.map((book, index) => (
                      <div key={index}>
                        <TextInput
                          name={`books[${index}].title`}
                          label='Book title'
                        />
                        <TextInput
                          name={`books[${index}].price`}
                          label='Book price'
                        />
                        <br />
                        {index > 0 && (
                          <button type='button' onClick={() => remove(index)}>
                            remove this book.
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
            <TBSelect name='selectedOption' options={options} label='country' />
            <ErrorMessage name='title' />
            <button type='submit' disabled={!isValid || !dirty || isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateOrder;

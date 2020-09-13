import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../../store/actions/authActions';

function SignedInMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(signOutUser());
          history.push('/');
        }}
      >
        logout
      </button>
    </div>
  );
}

export default SignedInMenu;

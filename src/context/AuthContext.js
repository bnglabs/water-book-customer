import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {signIn: false, loading: false};
    case 'signin':
      return {signIn: true, loading: false};
    case 'splash':
      return {signIn: false, loading: false};

    default:
      return state;
  }
};

const signin = dispatch => {
  return () => {
    dispatch({
      type: 'signin',
    });
  };
};

const splash = dispatch => {
  return () => {
    dispatch({
      type: 'splash',
    });
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, splash},
  {signIn: false, loading: true},
);

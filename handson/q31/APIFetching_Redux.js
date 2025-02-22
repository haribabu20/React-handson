const redux = require('redux');
const { createStore, applyMiddleware } = redux;
const thunkMiddleware = require('redux-thunk').default;
const fetch = require('node-fetch')



const initialState = {
  loading: false,
  users: [],
  errors: '',
};

const FETCH_USER_REQUESTED = 'fetch_user_requested';
const FETCH_USER_SUCCEEDED = 'fetch_user_succeeded';
const FETCH_USER_FAILURE = 'fetch_user_failure';

const fetch_user_requested = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

const fetch_user_succeeded = (user) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: user,
  };
};

const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        errors: '',
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        errors: action.payload,
      };
    default:
      return{
        ...state
      }
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetch_user_requested());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => {
        const users = res.map((user) => user.id);
        dispatch(fetch_user_succeeded(users));
      })
      .catch((error) => {
        dispatch(fetch_user_failure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchUsers());

store.subscribe(() => console.log(store.getState()));

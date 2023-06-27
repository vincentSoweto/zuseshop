import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Action Types
const STORE_TOKEN = 'STORE_TOKEN';

// Action Creators
export const storeToken = token => ({
  type: STORE_TOKEN,
  payload: token,
});

// Reducers
const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case STORE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  token: tokenReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

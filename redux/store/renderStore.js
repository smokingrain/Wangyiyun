//create store for renderprocess


import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import rootReducers from '../reducers'


//it's from redux-electron-store repositiry
//This is an additional function
//i don't understand either
let filter = {
  notifications: true,
  settings: true
};
const middleware = []
const initialState = {}
let enhancer = compose(
  applyMiddleware(...middleware),
  electronEnhancer({filter})
  // DevTools.instrument()
);



let store = createStore(rootReducers, initialState, enhancer);
let dispatch = store.dispatch
let getState = store.getState
export { store, dispatch, getState }



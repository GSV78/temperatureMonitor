import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import libReducer from './libReducer';

let reducers = combineReducers({
    lib: libReducer
});

export type AppStateType = ReturnType<typeof store.getState>

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store

export default store;
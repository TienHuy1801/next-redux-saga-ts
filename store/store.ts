// import { applyMiddleware, createStore } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import rootReducer from './reducers'

// const middleware = [thunk];

// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// export default store;

import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import rootReducer from './reducers'

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export default store;


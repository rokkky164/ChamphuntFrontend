import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ mk: () => ({}) });
let composeEnhancers = compose;
// if (ENVIRONMENT === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) { // eslint-disable-line
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         latency: 0,
//     });
// }
export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import logoutReducer from './Logout/logout.reducer';

const rootReducer = combineReducers({
    logout: logoutReducer,

});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
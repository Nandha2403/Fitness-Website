import {
	legacy_createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "./Authentication/reducer";

const rootReducer=combineReducers({authReducer})

const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= legacy_createStore(rootReducer,enhancer(applyMiddleware(thunk)))
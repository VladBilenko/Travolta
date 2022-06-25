import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";

import hotelsReducers from "./hotels/reducers";

const rootReducer = combineReducers({
    ...hotelsReducers
});

export default function configureStore() {
    const middlewares: any[] = [
    ];

    const enhancers = composeWithDevTools(
        applyMiddleware(...middlewares),
    );

    return createStore(rootReducer, enhancers);
}

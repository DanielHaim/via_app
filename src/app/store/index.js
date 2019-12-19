import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from "./epics"
import { rootReducers } from "./reducers"


export const configureStore = () => {
    const epicMiddleware = createEpicMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducers, composeEnhancers(
        applyMiddleware(epicMiddleware)
    ));

    epicMiddleware.run(rootEpics);
    return store;
}


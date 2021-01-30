import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducers, setupEpicCombines } from './MainMiddlewares';
const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware();
let store = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(
        rootReducers,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware, epicMiddleware, loggerMiddleware)
        )
    );
    epicMiddleware.run(setupEpicCombines);
} else {
    store = createStore(
        rootReducers,
        composeWithDevTools(applyMiddleware(thunkMiddleware, epicMiddleware))
    );
    epicMiddleware.run(setupEpicCombines);
}
export default store;

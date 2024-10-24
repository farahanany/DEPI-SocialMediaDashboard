import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Update this line
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

// Create the Redux store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// Correctly define the DataProvider component
const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default DataProvider;

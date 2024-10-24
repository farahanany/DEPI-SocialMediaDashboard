import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Corrected import
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create the Redux store using configureStore
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: composeWithDevTools(),
});

// Correctly define the DataProvider component
const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default DataProvider;

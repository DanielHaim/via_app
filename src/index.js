import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./app/index"
import { Provider } from 'react-redux';
import { configureStore } from './app/store';
import { init } from "./app/store/actions";
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call it once in your app. At the root of your app is the best place
toast.configure({
    position: "top-center",
	autoClose: 2000,
	hideProgressBar: true,
	newestOnTop: false,
	closeOnClick: true,
	transition: Slide,
    style: {
		textAlign: "center",
        maxWidth: "-webkit-fill-available",
        minWidth: "-webkit-fill-available",
        margin: 0,
        top: 0,
        left: 0,
        right: 0,
		padding: 0    
	}
});

const store = configureStore();

store.dispatch(init());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
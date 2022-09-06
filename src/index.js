//Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

//Components
import App from './components/App/App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
        </BrowserRouter>
    </Provider>
);

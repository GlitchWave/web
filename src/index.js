import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

// Render the main component into the dom

function Init() {
    document.getElementById('app').style.height = window.innerHeight.toString() + 'px';

    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    , document.getElementById('app'));
}

Init();

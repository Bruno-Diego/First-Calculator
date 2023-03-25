import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
    <h6>
        This is my first
    </h6>
    <h1>
        Calculator
    </h1>
    <Calculator />
    </div>
    ,document.getElementById('root'));
serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';


import { Counter } from './Counter.js';

const h1 = <h1>Hello World</h1>;


window.onload = function() {
	ReactDOM.render(<Counter />, document.getElementById('app'));
}


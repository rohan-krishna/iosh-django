import React from 'react';
import ReactDOM from 'react-dom';
import { Notebooks } from './notebooks.jsx'

export class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<Notebooks></Notebooks>
			</div>
			);
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app')); 

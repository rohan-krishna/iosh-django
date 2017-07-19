import React from 'react';

export class Counter extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.increaseCount = this.increaseCount.bind(this);
	}

	increaseCount() {
		let count = this.state.count;
		this.setState({ count: count+1 });
	}
	
	render() {
		return (
			<button onClick={this.increaseCount}>Click to Increase Count : {this.state.count}</button>
		)
	}
}
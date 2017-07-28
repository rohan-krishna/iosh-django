import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

export class Notebooks extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { notebooks: [] };
		this.loadNotebooks = this.loadNotebooks.bind(this);	
	}	
	
	loadNotebooks() {	
		console.log("Component has been mounted!")

		axios.get('/get-notebooks').then(function(res) {
			console.log(res);
			this.setState({ notebooks : res.data });
		}.bind(this));
	}

	componentDidMount() {
		this.loadNotebooks();
	}

	render() {
		
		const notebooks = this.state.notebooks;
		// const notebooksList = this.state.notebooks.map(function(notebook) {
		// 	return <li key={notebook.id}>{notebook.title}</li>
		// })

		return (
			<div className="ui container fluid">
				<div className="ui grid">
					<div className="two wide column full height notebooks">
						<div className="ui horizontal divider">Notebooks</div>
						<ul>
							{notebooks}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
	render() {
		return <div className="spaceship">
					<div className="name"> Name: {this.props.name}</div>
					<div className="speed"> Speed: {this.props.speed}</div>
					<div className="has-rockets"> Has Rockets: {this.props.hasRockets}</div>
					<ul className="colors"> Colors:
						<li>{this.props.colors}</li>
					</ul>
				</div>
	}
}

Spaceship.defaultProps = {
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
}

export default Spaceship;
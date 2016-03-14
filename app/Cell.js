import React, {Component} from 'react';

class Cell extends Component {
	render() {
		let test = "abd"
		return (
			<td>
				{this.props.cell.name}{test}
			</td>
		);
	}
}

export default Cell;
import React, {Component} from 'react';

class Cell extends Component {
	render() {
		return (
			<td>
				{this.props.cell.name}
			</td>
		);
	}
}

export default Cell;
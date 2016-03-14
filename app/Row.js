import React, {Component} from 'react';
import Cell from './Cell';

class Row extends Component {
	render() {
		// let cells = this.props.row.map((cell, index) => <td>{cell.name}</td>);
		let cells = this.props.row.map((cell, index) => <Cell key={index} cell={cell} />);
		return (
			<tr>
				{cells}
			</tr>
		);
	}
}

export default Row;
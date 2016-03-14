import React, {Component} from 'react';
import Row from './Row';

class Table extends Component {
	generateRows(size) {
		let rows = [];
		for(let i=0; i<size; i++) {
			let cells = [];
			for(let j=0; j<size; j++) {
				cells = [...cells, {name: `${i}_${j}`}];
			}
			rows = [...rows, cells]
		}
		return rows;
	}

	render() {
		const size = this.props.size;
		console.time('generateRows');
		let rows = this.generateRows(size).map((row, index) => <Row key={index} row={row} />);
		console.timeEnd('generateRows');
		return (
			<table>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

export default Table;
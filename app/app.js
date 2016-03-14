import React from 'react';
import {render} from 'react-dom';
import Table from './Table';

console.time('table render');
render(<Table size="9" />, document.getElementById('root'));
console.timeEnd('table render');
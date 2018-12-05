import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/container/App';
import { sum } from './foo';

render(<App />,document.getElementById('root'));

console.log(sum(1,2).toString());
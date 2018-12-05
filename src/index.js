import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/container/App';
import { sum } from './foo';
render(React.createElement(App, null), document.getElementById('root'));
console.log(sum(1, 2).toString());
//# sourceMappingURL=index.js.map
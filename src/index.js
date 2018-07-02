import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Demo from './Demo/Demo';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();

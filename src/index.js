import React from 'react';
import ExtReactDOM from '@sencha/ext-react-modern';
import './index.css';
import TemplateComponent from './template/TemplateComponent';
import * as serviceWorker from './serviceWorker';


ExtReactDOM.render([
	<TemplateComponent />
	], document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

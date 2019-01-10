import React from 'react';
import ReactDOM from 'react-dom';

// Component
import App from  'components/app';

// Styles
import './styles/root.scss'

const container = document.getElementById('app-container');

ReactDOM.render(<App />, container);

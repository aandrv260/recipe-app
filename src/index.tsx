// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// Global Styles
import './index.scss';
import './assets/scss/typography.scss';
import './assets/scss/utils.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);

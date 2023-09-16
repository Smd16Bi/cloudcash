import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/base.css';
import './assets/reset.css';
import './assets/root.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

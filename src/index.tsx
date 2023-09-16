import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/reset.css';
import './assets/root.css';
import './assets/base.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);

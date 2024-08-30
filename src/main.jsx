import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import './index.css'
import React from 'react';
import Landing from './pages/Landing.jsx';
import Documentation from './pages/Documentation.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/documentation',
    element: <Documentation />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)

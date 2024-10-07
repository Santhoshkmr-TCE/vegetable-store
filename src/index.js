import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Vegetable from'./components/vegetable';
import Herbs from './components/herbs';
import Fruits from './components/fruits';
import Form from './components/form';

import Cart from './components/cart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "fruitt",
    element: <Vegetable />,
  },
  {
    path: "fruittt",
    element: <Fruits  />,
  },
  {
    path: "herbs",
    element: <Herbs />,
  },
  {
    path: "form",
    element: <Form  />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

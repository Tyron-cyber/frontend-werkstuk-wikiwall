import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{
createBrowserRouter,
RouterProvider,

} from 'react-router-dom'

import Categories from './router/categories';
import reportWebVitals from './reportWebVitals';
import Root from './router/root';
import Error from './components/error';
import Home from './router/home';


const router = createBrowserRouter([
  {
path:'/',
element: <Home/>, 
errorElement: <Error/>,


children:[
  { 
    path: 'categories',
    element: <Categories/>
  },

 
  
]
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

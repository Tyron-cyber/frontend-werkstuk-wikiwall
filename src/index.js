import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{
createBrowserRouter,
RouterProvider,
BrowserRouter

} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Categories from './router/categories';
import Error from './components/error';
import Home from './router/home';
import Navigation from './components/navigation';



const router= createBrowserRouter ([

  {
    path:"/",
    element:<Navigation/>,
    // errorElement: <Error/>,

    children:[
      {
        index:true,
        element:<Home/>
      },

      {
      path:"categories",
      Component: Categories
    },
    {

      path:"/error",
      element: <Error/>
    }

  ]
  }


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact/Contact';
import Home from './components/Home';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
          // loader: () => fetch('https://library-management-server-nu.vercel.app/service')
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

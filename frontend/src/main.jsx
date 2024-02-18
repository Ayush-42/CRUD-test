// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import AutoCompleteEmails from './option.jsx'
// import './index.css'
// import UserList from './userList.jsx'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
    // <AutoCompleteEmails />

    // <h1>Your MongoDB User Data</h1>
    //   <UserList />
//   </React.StrictMode>,
// )

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App1 from "./App";
import Login from "./Login";
import Register from "./Register"
import Edit from "./edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App1/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/edit",
    element: <Edit/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

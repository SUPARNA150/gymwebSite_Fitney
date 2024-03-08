import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import About from './components/about/about.jsx'
import Classes from './components/classes/classes.jsx'
import Contact from './components/contact/contact.jsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
    ]
  }   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

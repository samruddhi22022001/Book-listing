import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from "./components/Contact.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// Creating Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)



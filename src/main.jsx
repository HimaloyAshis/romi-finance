import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from './pages/Routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)

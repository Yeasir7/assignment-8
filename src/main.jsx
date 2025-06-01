import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './mainLayout/MainLayout';
import Home from './pages/Home';
import ListedBook from './pages/ListedBook';
import PageToRead from './pages/PageToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/listedBook",
        element: <ListedBook></ListedBook>
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './mainLayout/MainLayout';
import Home from './pages/Home';
import ListedBook from './pages/ListedBook';
import PageToRead from './pages/PageToRead';
import BookDetails from './pages/BookDetails';
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBook",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: async({ params }) => {
          const res = await fetch("/books.json");
          const books = await res.json();
          const foundBook = books.find(book => book.bookId === parseInt(params.bookId));
          return foundBook;
        }
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </StrictMode>
);

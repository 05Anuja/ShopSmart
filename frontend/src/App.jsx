import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import RootLayout from "./Components/RootLayout";
import PageNotFound from "./Components/PageNotFound";
import Products2 from "./Components/Products2";
import AddToCart from "./Components/AddToCart";
import CreateProduct from "./Components/ProductDetails/CreateProduct";
import ShowProduct from "./Components/ProductDetails/ShowProducts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="explore" element={<Products2 />} />
      <Route path="learnMore" element={<About />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products2 />} />
      <Route path="products/:id" element={<CreateProduct>
        <ShowProduct />
      </CreateProduct>}/>
      <Route path="add-to-cart" element={<AddToCart/>} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
    <CreateProduct />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

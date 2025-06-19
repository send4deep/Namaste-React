import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import Footers from "./components/Footers";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const App = () => {
  const [userName, setUserName] = React.useState("");
  useEffect(() => {
    setUserName("Taapsi Mishra");
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userName, setLoggedInUser: setUserName }}
      >
        <div className="app">
          <Header />
          <Outlet />
          <Footers />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

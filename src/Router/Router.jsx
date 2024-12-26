import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCar from "../Pages/AddCar/AddCar";
import AvailableCars from "../Pages/AvailableCars/AvailableCars";
import CarDetails from "../Pages/CarDetails/CarDetails";
import MyCar from "../Pages/MyCar/Mycar";
import MyBooking from "../Pages/MyBookings/MyBooking";
import PrivetRoute from "./PrivetRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/availableCars",
        element: <AvailableCars></AvailableCars>,
      },
      {
        path: "/addCar",
        element: (
          <PrivetRoute>
            <AddCar></AddCar>
          </PrivetRoute>
        ),
      },
      {
        path: "/carDetails/:id",
        element: (
          <PrivetRoute>
            <CarDetails></CarDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/cars/${params.id}`),
      },
      {
        path: "/myCar",
        element: (
          <PrivetRoute>
            <MyCar></MyCar>
          </PrivetRoute>
        ),
      },
      {
        path: "/myBooking",
        element: (
          <PrivetRoute>
            <MyBooking></MyBooking>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;

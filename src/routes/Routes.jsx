import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import ErrorPage from '../pages/error/ErrorPage';
import Home from '../pages/home/Home';
import Login from '../pages/logIn/Login';
import Register from '../pages/register/Register';
import AddCraftItem from '../pages/addItem/AddCraftItem';
import PrivateRoutes from './PrivateRoutes';
import AlCraftsList from '../pages/allCraftsList/AlCraftsList';
import MyCraftList from '../pages/myCrafts/MyCraftList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //loader: () => fetch('/estates.json')

      },
      {
        path: "/login",
        element: <Login></Login>,


      },
      {
        path: "/register",
        element:<Register></Register>

      },
      {
        path:"/add-craft-item",
        element:<PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
      },
      {
        path:"/all-arts-and-crafts",
        element:<AlCraftsList></AlCraftsList>
      },
      {
        path:"/my-art-and-craft-list",
        element:<PrivateRoutes><MyCraftList></MyCraftList></PrivateRoutes> 
      }

    ]
  },
]);

export default router;
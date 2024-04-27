import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/errorpage/ErrorPage'
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import UpdateProfile from '../pages/Profile/UpdateProfile';
import EstateDetails from '../pages/Estate/EstateDetails';
import PrivateRoutes from './PrivateRoutes';
import Favorites from '../pages/Favourites/Favorites';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('/estates.json')
            
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/update-profile",
          element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
        },
        {
          path:"/view-details/:id",
          element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
          loader: () => fetch('/estates.json')
        },
        {
          path:"/favorites",
          element:<PrivateRoutes><Favorites></Favorites></PrivateRoutes>,
          loader: () => fetch('/estates.json')
        }
      ]
    },
  ]);

export default router;
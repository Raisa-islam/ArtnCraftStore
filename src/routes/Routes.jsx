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
import ViewDetails from '../layouts/details/ViewDetails';
import UpdateItem from '../pages/updateItem/UpdateItem';

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
        element:<AlCraftsList></AlCraftsList>,
        loader: ()=> fetch('http://localhost:5001/items')
      },
      {
        path:"/view-details/:id",
        element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5001/items/${params.id}`)
      },
      {
        path:"/my-art-and-craft-list",
        element:<PrivateRoutes><MyCraftList></MyCraftList></PrivateRoutes> ,
        
      },
      {
        path:"/update-item/:id",
        element:<PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5001/items/${params.id}`)
      }

    ]
  },
]);

export default router;
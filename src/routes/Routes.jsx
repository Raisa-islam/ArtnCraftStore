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
import CategoriesPage from '../pages/categories/CategoriesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://b9-a10-server-zy66oz158-raisa-islams-projects.vercel.app/items')

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
        loader: ()=> fetch('https://b9-a10-server-zy66oz158-raisa-islams-projects.vercel.app/items')
      },
      {
        path:"/view-details/:id",
        element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b9-a10-server-zy66oz158-raisa-islams-projects.vercel.app/items/${params.id}`)
      },
      {
        path:"/my-art-and-craft-list",
        element:<PrivateRoutes><MyCraftList></MyCraftList></PrivateRoutes> ,
        
      },
      {
        path:"/update-item/:id",
        element:<PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b9-a10-server-zy66oz158-raisa-islams-projects.vercel.app/items/${params.id}`)
      },
      {
        path:"/category/:cat",
        element:<PrivateRoutes><CategoriesPage></CategoriesPage></PrivateRoutes>
      }

    ]
  },
]);

export default router;
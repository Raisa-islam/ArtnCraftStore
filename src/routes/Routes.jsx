import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import ErrorPage from '../pages/error/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
       
      ]
    },
  ]);

export default router;
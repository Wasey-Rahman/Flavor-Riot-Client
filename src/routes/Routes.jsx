import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../layout/LogIn/LogIn";


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
    {
      path:'login',
      element:<LogIn></LogIn>
    },
    
  ]);
  export default router;
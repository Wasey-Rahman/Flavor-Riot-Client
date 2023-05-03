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
    // {
    //   path:'ChefInfo',
    //   element:<ChefInfo></ChefInfo>,
    //   loader:({params})=>fetch(`http://localhost:5000/chef`)

    // }
    
  ]);
  export default router;
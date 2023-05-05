import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../layout/LogIn/LogIn";
import ChefRecipes from "../pages/Home/Chef/ChefRecipes/ChefRecipes";
import NotFound from "../404_page/NotFound";
import Register from "../layout/Register/Register";
import Blog from "../Blog/Blog";
import Pdf from "../Blog/DownloadPdf/Pdf";





  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>
    },
    
        {
          path:'login',
          element:<LogIn></LogIn>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
      
    
    
    {
      path:'/ChefRecipes/:id',
      element:<ChefRecipes></ChefRecipes>,
      loader:({params})=>fetch(`https://flavor-riot-server-waseyrahman19-gmailcom.vercel.app/chef/${params.id}`)
    },
    {
      path:'/pdf',
      element:<Pdf></Pdf>
    },
    
    {
      path:'*',
    element:<NotFound></NotFound>
    }
    
  ]);
  export default router;
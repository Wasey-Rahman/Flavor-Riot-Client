import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from '../pages/Home/Banner/Banner';
import Home from '../pages/Home/Home/Home';

import Chef from '../pages/Home/Chef/Chef';






const Main = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
          <Chef></Chef>
         
           <Home></Home>
           <Footer></Footer>
        </div>
    );
};

export default Main;
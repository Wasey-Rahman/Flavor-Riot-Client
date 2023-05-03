import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from '../pages/Home/Banner/Banner';
import Home from '../pages/Home/Home/Home';





const Main = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Home></Home>
           <Footer></Footer>
        </div>
    );
};

export default Main;
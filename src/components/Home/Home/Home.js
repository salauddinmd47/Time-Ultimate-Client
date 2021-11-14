import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProductsSection from '../ProductsSection/ProductsSection';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews';
import SpringCollection from './SpringCollection/SpringCollection';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <ProductsSection></ProductsSection>
            <Reviews></Reviews>
            <SpringCollection></SpringCollection>
             <Footer></Footer>
        </div>
    );
};

export default Home;
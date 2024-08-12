import React from 'react';
import { Carousel } from "../Carousel/Carousel"
import { slides } from "../Carousel/Data/CarouselData.json"


const Home = () => {

    return (
    
        <div>
            <h1>Welcome To Your Home Page</h1>
            <p>Time to plan your next adventure!</p>
            <center><Carousel data={slides} /></center>
        </div>
    );
};

export default Home; 
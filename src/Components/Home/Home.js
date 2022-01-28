import React from 'react';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <Hero />
            <Post />
            <Contact />
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    return (
        <div className='home-container'>
           <article className='article-container'>
             <p className="name-title">
                Hi, my name is
             </p>
             <h1 className="name">
                Raton Roy 
             </h1>
             <div className="profession-container">
                <h1 className="pro-title">
                    MERN Stack Developer 
                </h1>
                <ul className='pro-items'>
                    <li className='pro-item'>Front End Developer</li>
                    <li className='pro-item'>React Developer </li>
                    <li className='pro-item'>Back End Developer </li>
                </ul>
             </div>
             <div className="home-buttons">
                <Link className="resume-btn btn">
                   Resume 
                </Link>
                <Link className="btn about-btn">
                   About Me 
                </Link>
             </div>
            </article> 
        </div>
    );
};

export default Home;
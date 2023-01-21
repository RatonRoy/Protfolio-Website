import React from 'react';
import "./About.css";
import imgpicture from '../../Assects/img/profile-removebg-preview (1).png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-container section-container'>
            <div className="section-title-container">
                <h1 className="section-title">
                    About Me 
                </h1>
                <span className="hr-line"></span>
            </div>
            <div className="about-wrap">
                 <div className="about-img-container">
                    <img src= {imgpicture} alt="" />
                </div>
                <div className="about-info-container">
                    <p className='about-info'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic quibusdam repudiandae quam excepturi vitae unde beatae accusantium dolorem voluptate pariatur officia nostrum doloribus nemo facere debitis facilis officiis ullam, tenetur saepe aliquam quidem reiciendis necessitatibus sequi? Culpa expedita qui eveniet odio ullam, tenetur iste, nostrum consequatur, officia porro eum!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium alias recusandae modi dolores dolorem iusto beatae, quam ullam praesentium, assumenda rem, distinctio pariatur dicta maiores voluptatibus unde sunt. Earum, repudiandae maiores enim nesciunt vel delectus!
                    </p>
                    <div className="btn-container">
                        <Link className="resume-btn btn">
                           Get Resume 
                        </Link>
                        <Link className="btn about-btn">
                            My Skills 
                        </Link>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default About;
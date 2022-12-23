import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import './Icon.css';

const Icon = () => {
    return (
        <div className='icons-container'>
            {/* <span className="line-hight">  </span> */}
            <p className="icon">
                <Link to = "/" className='icon-link'>
                   <BsGithub/>
                </Link>
            </p>
            <p className="icon">
                <Link to = "/" className='icon-link'>
                   <BsFacebook/>
                </Link>
            </p>
            <p className="icon">
                <Link to = "/" className='icon-link'>
                   <BsLinkedin/>
                </Link>
            </p>
            <p className="icon">
                <Link to = "/" className='icon-link'>
                   <SiGmail/>
                </Link>
            </p>
            <span className="line-hight">  </span>
        </div>
    );
};

export default Icon;
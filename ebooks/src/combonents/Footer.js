import React from 'react'
import "../index.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';



function Footer() {
    return (
        <>
            <div className='contact'><AiFillFacebook /><AiFillInstagram /><AiFillGithub /><AiFillLinkedin /><AiFillPhone /></div>
            <div className='footer'>Copyright@2023</div>
        </>
    )
}

export default Footer
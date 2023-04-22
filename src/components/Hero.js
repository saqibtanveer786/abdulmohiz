import React from 'react';

//IMPORTTING MATERIAL UI ICONS

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

//IMPORTING COMPONENTS FROM REACT-AWESOME-REVEAL

import { Slide } from 'react-awesome-reveal';

import { Link } from 'react-router-dom';

//IMPORTING CSS FILE
import '../styles.css/ForComponents/Hero.css';

// import first from '../assets/4.jpg';
export default function Hero() {
  return (
    <>
      <section id="hero_section">
        <div className="cols col1">
          <Slide cascade damping={0.1} fraction={0}>
            <div id="hero_section_text">
              <p id="upper_p">Aslam o alikum</p>
              <h1 id="first_heading">My name is</h1>
              <h1 id="second_heading">Abdul Mohiz</h1>
              {/* <p id="lower_p">
              A CNC Designer with a nice experience and creative skills
            </p> */}
            </div>
            <div id="social-media-icons-hero">
              <Link to={'https://www.instagram.com/abdul.mohiz.pk11/'}>
                <InstagramIcon />
              </Link>
              <Link
                to={
                  'https://www.facebook.com/abdul.mohiz.31542?mibextid=ZbWKwL'
                }
              >
                <FacebookIcon />
              </Link>
              <Link to={'http://abdul.mohiz.pk11@gmail.co'}>
                <MailOutlineIcon />
              </Link>
              <Link
                to={
                  'http://api.whatsapp.com/send?phone=+923421413220text=welcome'
                }
              >
                <WhatsAppIcon />
              </Link>
            </div>
          </Slide>
        </div>
        <div className="cols col2">{/* <img src={first} alt="alt" /> */}</div>
      </section>
    </>
  );
}

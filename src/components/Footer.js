import React from 'react';

import { Link } from 'react-router-dom';

//IMPORTTING ICONS FROM MATERIAL UI

import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

//IMPORTING CSS FILE
import '../styles.css/ForComponents/Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="copyright">
          <p>&copy; 2023 AbdulMohiz.com</p>
        </div>
        <div id="social_media_icons_footer">
          <Link to={'https://www.instagram.com/abdul.mohiz.pk11/'}>
            <InstagramIcon />
          </Link>
          <Link
            to={'https://www.facebook.com/abdul.mohiz.31542?mibextid=ZbWKwL'}
          >
            <FacebookIcon />
          </Link>
          <Link to={'mailto:abdul.mohiz.pk11@gmail.com'}>
            <MailOutlineIcon />
          </Link>
          <Link
            to={'http://api.whatsapp.com/send?phone=+923421413220text=welcome'}
          >
            <WhatsAppIcon />
          </Link>
        </div>
      </footer>
    </>
  );
}

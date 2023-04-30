import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

//IMPORTING CSS FILE
import '../styles.css/ForPages/DesignDetail.css';

//IMPORTTING ICONS FROM MATERIAL UI

import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

//IMPORTING DESIGNSLIST
import DesignsContext from '../context/DesignsContext';

export default function DesignDetail() {
  const params = useParams();
  const id = params.id;

  const { getSpecificDesign, specificDesign } = useContext(DesignsContext);

  useEffect(
    () => {
      getSpecificDesign(id);
    },
    // eslint-disable-next-line
    [id]
  );

  const styles = {
    width: '500px',
    height: '410px',
    background: `url(${specificDesign && specificDesign.image})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="design_detail">
      <div id="detail_page_col1">
        <div id="detail_page_image" style={styles}></div>
        <h1>{specificDesign && specificDesign.title}</h1>
      </div>
      <div id="detail_page_col2">
        <h1>Description</h1>
        <p>{specificDesign && specificDesign.description}</p>
        <p>
          So If you want to buy this design odder me on
          {
            <Link style={{ color: 'black', marginTop: '12px' }}>
              __WhatsApp
              <WhatsAppIcon /> .
            </Link>
          }
        </p>
        <FacebookIcon
          style={{
            marginInline: '2.5px',
            marginBlock: '15px',
            color: '#233150',
          }}
        />
        <InstagramIcon
          style={{
            marginInline: '2.5px',
            marginBlock: '15px',
            color: '#233150',
          }}
        />
        <MailOutlineIcon
          style={{
            marginInline: '2.5px',
            marginBlock: '15px',
            color: '#233150',
          }}
        />
        <WhatsAppIcon
          style={{
            marginInline: '2.5px',
            marginBlock: '15px',
            color: '#233150',
          }}
        />
      </div>
    </section>
  );
}

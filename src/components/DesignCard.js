import React from 'react';

//IMPORTING CSS FILE
import '../styles.css/ForComponents/DesignCard.css';
import { Link } from 'react-router-dom';

export default function DesignCard({ image, title, id }) {
  const styles = {
    height: '210px',
    background: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0 0 10px 10px',
  };

  return (
    <Link to={`/designs/${id}`}>
      <div id="card">
        <div id="card_pic" style={styles}></div>
        <div id="card_content">
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
}

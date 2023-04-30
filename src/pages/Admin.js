import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//IMPORTTING MATERIAL UI ICONS

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

//IMPORTING CSS FILE
import '../styles.css/ForPages/Admin.css';

//IMPORTING DESIGNS CONTEXT
import DesignsContext from '../context/DesignsContext';

export default function Admin() {
  const { addDesign, getDesigns } = useContext(DesignsContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const styles = {
    height: '300px',
    width: '300px',
    background: `url(${image ? image : ''})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
  };

  const design = {
    title,
    description,
    image,
  };

  return (
    <section id="admin_page">
      {/* FOR PREVIEW */}
      <div id="preview">
        <div id="preview_image_h1">
          <div id="preview_image" style={styles}></div>
          <div id="preview_h1">
            <h1>{title ? title : 'headingTitle'}</h1>
          </div>
        </div>
        <div id="preview_description">
          <h1>Description</h1>
          <p>
            {description
              ? description
              : ' Our CNC wood design files are created using state-of-the- computer-aided design (CAD) software, resulting inrecise andintricate designs that can be manufactured using a computernumerical control (CNC) machine. These designs can be used to createa wide.'}
          </p>
          <p>
            So If you want to buy this design odder me on
            {
              <Link style={{ color: 'black', marginTop: '12px' }}>
                __WhatsApp
                <WhatsAppIcon /> .
              </Link>
            }
          </p>
        </div>
      </div>
      {/* FOR INPUTS */}
      <div id="inputs">
        <input
          type="text"
          name="title"
          placeholder="Enter The Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          rows={8}
          type="text"
          name="description"
          placeholder="Enter The Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="url"
          name="image"
          placeholder="Enter The Image Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <button
          id="design_submit_button"
          onClick={() => {
            addDesign(design);
            getDesigns();
            navigate('/designs');
          }}
        >
          Publish
        </button>
      </div>
    </section>
  );
}

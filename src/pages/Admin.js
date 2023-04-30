import React, { useState } from 'react';
import preval from 'babel-plugin-preval/macro';

//IMPORTING CSS FILE
import '../styles.css/ForPages/Admin.css';

//IMPORTING DESIGNSLIST
import designsList from '../helpers/designsList.json';

export default function Admin() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const styles = {
    height: '300px',
    width: '300px',
    background: `url(${image ? image : ''})`,
    backgroundPosition: 'center center',
    backgroundSize: '300px',
    backgroundRepeat: 'no-repeat no-repeat',
  };

  function Publish() {
    const x = preval`
  const fs = require('fs')
  module.exports = fs.readFile(require.resolve(${designsList}), 'utf8')
`;
    // const jsonData = JSON.parse(x);
    console.log(JSON.parse(x));
  }

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
            Our design files are created with attention to detail, ensuring that
            they can be easily imported into your CNC machine and executed with
            accuracy and consistency.
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
        <button id="design_submit_button" onClick={Publish}>
          Publish
        </button>
      </div>
    </section>
  );
}

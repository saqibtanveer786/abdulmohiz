import React from 'react';

//IMPORTING COMPONENTS FROM REACT-AWESOME-REVEAL
import { Rotate, Slide } from 'react-awesome-reveal';

import '../styles.css/ForComponents/BriefDiscription.css';

export default function BriefDiscription() {
  return (
    <>
      <section id="brief_description">
        <Rotate className="slide" direction="right">
          <div id="brief_image"></div>
        </Rotate>
        <Slide className="slide1" direction="left">
          <div id="brief_content">
            <h1>Heading</h1>
            <p>I am Abdul Mohiz from pakistan...</p>
            <p>I am a CNC designer with</p>
            <p>many other skils. </p>
          </div>
        </Slide>
      </section>
    </>
  );
}

import React from 'react';

//IMPORTING COMPONENTS FROM REACT-AWESOME-REVEAL
import { Slide, Zoom } from 'react-awesome-reveal';

//IMPORTING CSS FILE
import '../styles.css/ForComponents/Skills.css';

export default function Skills() {
  return (
    <>
      <section id="skill_section">
        <Zoom className="zoom">
          <h1 id="skill_section_heading">Skills</h1>
        </Zoom>
        <Slide className="slide" cascade damping={0.1}>
          <ul>
            <li>
              <h1>2D Designing</h1>
              <p>
                I know 2D Designing and have a lot of experience in designing
              </p>
            </li>
            <li>
              <h1>3D Designing</h1>
              <p>
                I know 3D Designing and have a lot of experience in designing
              </p>
            </li>
            <li>
              <h1>Tools</h1>
              <p>Tools I Use: Aspire, Artcam, AutoCad etc</p>
            </li>
          </ul>
        </Slide>
      </section>
    </>
  );
}

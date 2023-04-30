import React, { useContext, useEffect } from 'react';
import DesignCard from '../components/DesignCard';

//IMPORTING CSS FILE
import '../styles.css/ForPages/Designs.css';

//IMPORTING DESIGNS CONTEXT
import DesignsContext from '../context/DesignsContext';

export default function Skills() {
  const { getDesigns, designsList } = useContext(DesignsContext);

  useEffect(() => {
    getDesigns();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div id="design_cards_container">
        {designsList &&
          designsList.map((design) => {
            return (
              <DesignCard
                key={design._id}
                id={design._id}
                title={design.title}
                image={design.image}
              />
            );
          })}
      </div>
    </>
  );
}

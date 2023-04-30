import React, { useState } from 'react';
import DesignsContext from './DesignsContext';

export default function DesignsState(props) {
  const [designsList, setDesignsList] = useState([]);
  const [specificDesign, setSpecificDesign] = useState(null);

  async function getDesigns() {
    const url = `http://localhost:5000/api/v1/designs/alldesigns`;
    const design = await fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        token: 'token_token',
      },
    });
    const jsonDesigns = await design.json();
    setDesignsList(jsonDesigns);
  }

  async function getSpecificDesign(id) {
    const url = `http://localhost:5000/api/v1/designs/getdesign/${id}`;
    const specificdesign = await fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        token: 'token_token',
      },
    });
    const jsonSpecificDesign = await specificdesign.json();
    console.log(jsonSpecificDesign);
    setSpecificDesign(jsonSpecificDesign);
  }

  async function addDesign(design) {
    const url = `http://localhost:5000/api/v1/designs/adddesign`;
    const addeddesign = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        token: 'token_token',
      },
      body: JSON.stringify(design),
    });
    const jsonAddedDesign = await addeddesign.json();
    console.log(jsonAddedDesign);
  }

  async function updateDesign(id, design) {
    const url = `http://localhost:5000/api/v1/designs/updatedesign${id}`;
    const updatedDesign = await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        token: 'token_token',
      },
      body: JSON.stringify(design),
    });
    const jsonUpdatedDesign = await updatedDesign.json();
    console.log(jsonUpdatedDesign);
  }

  async function deleteDesign(id) {
    const url = `http://localhost:5000/api/v1/designs/deletedesign${id}`;
    const deletedDesign = await fetch(url, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        token: 'token_token',
      },
    });
    const jsondeletedDesign = await deletedDesign.json();
    console.log(jsondeletedDesign);
  }

  return (
    <DesignsContext.Provider
      value={{
        designsList,
        specificDesign,
        setDesignsList,
        setSpecificDesign,
        getDesigns,
        getSpecificDesign,
        addDesign,
        updateDesign,
        deleteDesign,
      }}
    >
      {props.children}
    </DesignsContext.Provider>
  );
}

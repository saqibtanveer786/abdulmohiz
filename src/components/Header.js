import React, { useState } from 'react';

//IMPORTING COMPONENTS FROM REACT-AWESOME-REVEAL
import { Slide } from 'react-awesome-reveal';

//IMPORTING "LINK" FROM REACT-ROUTER-DOM
import { Link } from 'react-router-dom';

//IMPORTING CSS FILE
import '../styles.css/ForComponents/Header.css';

//IMPORTING ICONS FROM MATERIAL UI
// import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [isToggledIn, setIsToggledIn] = useState(false);

  function toggleMenu() {
    setIsToggledIn((pre) => !pre);
  }

  function navigating(e) {
    setIsToggledIn((pre) => !pre);
  }

  return (
    <>
      <header className="top_header">
        <div className="toggle_menu">
          <Slide className="slide" direction="right">
            <button onClick={toggleMenu}>
              <div className="menu_line"></div>
              <div className="menu_line"></div>
              <div className="menu_line"></div>
            </button>
          </Slide>
        </div>
        <nav id={isToggledIn ? 'open' : 'close'}>
          <ul>
            <li>
              <Link to="/" onClick={navigating}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/designs" onClick={navigating}>
                Designs
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={navigating}>
                Experience
              </Link>
            </li>
            {localStorage.getItem('admin') && (
              <li>
                <Link to="/admin" onClick={navigating}>
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

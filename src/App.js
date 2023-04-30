//IMPORTING CSS FILE
import './App.css';

//IMPORTING DESIGNS STATE
import DesignsState from './context/DesignsState';

//IMPORTING ROUTER
import { HashRouter, Routes, Route } from 'react-router-dom';

//IMPORTTING MATERIAL UI ICONS

// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LoginIcon from '@mui/icons-material/Login';
// import ShareIcon from '@mui/icons-material/Share';
// import TwitterIcon from '@mui/icons-material/Twitter';
// https://axiomatic-winter-lute.glitch.me/api/v1/designs/deletedesign/
// import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
//IMPORTING PAGES
import Home from './pages/Home';
import Designs from './pages/Designs';
import Experience from './pages/Experience';
import DesignDetail from './pages/DesignDetail';
import Admin from './pages/Admin';

//IMPORTING COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <DesignsState>
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/designs" element={<Designs />} />
            <Route exact path="/designs/:id" element={<DesignDetail />} />
            <Route exact path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
        </HashRouter>
      </DesignsState>
    </>

    // #233150
  );
}

export default App;

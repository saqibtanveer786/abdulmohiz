import './App.css';

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

//IMPORTING PAGES
import Home from './pages/Home';
import Designs from './pages/Designs';
import Experience from './pages/Experience';

//IMPORTING COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/designs" element={<Designs />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>

    // #233150
  );
}

export default App;

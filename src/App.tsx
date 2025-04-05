import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const App = () => {
  const location = useLocation();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <MainContent>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/floorplans" element={<FloorPlans />} />
              <Route path="/gallery" element={<Projects />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/t20" element={<ProjectDetails />} />
            </Routes>
          </AnimatePresence>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

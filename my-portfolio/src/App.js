import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe.js'
import ProjectsPage from './components/ProjectsPage.js'
import ContactPage from './components/ContactPage.js'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

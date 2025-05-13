import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
// import Events from './components/Events';
// import Teams from './components/Teams';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/teams" element={<Teams />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

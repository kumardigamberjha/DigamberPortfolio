import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HeroSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

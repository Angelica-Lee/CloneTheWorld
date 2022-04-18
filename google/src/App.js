import './App.css';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResult />}></Route>
        </Routes>
      </Router>
  );
}

export default App;

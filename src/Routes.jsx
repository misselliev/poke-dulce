import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites'

const Navigation = () => (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
);

export default Navigation;
import { Routes, Route } from 'react-router-dom';
import React from 'react'

const Home = React.lazy(() => import('./Components/Home'));
const Favorites = React.lazy(() => import('./Pages/Favorites'));

const Navigation = () => (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
);

export default Navigation;
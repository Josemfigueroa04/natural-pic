import { Route, Routes } from 'react-router-dom';
import Favoritos from '../pages/Favoritos';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
  )
}

export default AppRouters;
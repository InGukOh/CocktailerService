import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<div>join</div>} />
          <Route path="/login" element={<div>login</div>} />
          <Route path="/mypage" element={<div>mypage</div>} />
          <Route path="/cockgorithm" element={<div>cockgorithm</div>} />
          <Route path="/cockflow" element={<div>cockflow</div>} />
          <Route path="/cockcipe" element={<div>cockcipe</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

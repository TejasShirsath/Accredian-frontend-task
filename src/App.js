import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Referral from './pages/referral';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/referral/USR007" replace />} />
          <Route path='/referral/:userID' element={<Referral/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

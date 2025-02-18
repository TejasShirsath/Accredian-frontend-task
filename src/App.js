import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Referral from './pages/referral';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/referral/:userID' element={<Referral/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

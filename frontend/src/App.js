import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';
import Signup from "./components/Singup";
import Login from "./components/Login";


function App() {
  const user = localStorage.getItem("token");

  
  return (
    <Router>
      <Routes>
      {user && <Route path="/" exact element={<HomePage />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

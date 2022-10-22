import './App.css';
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage"
import CheckOutPage from "../CheckOutPage/CheckOutPage"
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
    </div>
  );
}

export default App;

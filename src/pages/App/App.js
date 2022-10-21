import './App.css';
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage"
import CheckOutPage from "../CheckOutPage/CheckOutPage"
import { Routes, Route } from 'react-router-dom';
import data from "../../data";


function App() {
  const { products } = data;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={ products } />} />
        <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
    </div>
  );
}

export default App;

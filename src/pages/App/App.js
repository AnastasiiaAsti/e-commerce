import './App.css';
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
    </div>
  );
}

export default App;

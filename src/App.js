// import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import Todos from './Components/Todos'
import Categories from './Components/Categories'
import Login from './Components/Login'
import NotFound from './Components/NotFound'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="Todos" element={<Todos />}/>
          <Route path="Categories" element={<Categories />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

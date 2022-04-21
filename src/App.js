// import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import ToDoItems from './Components/ToDoItems/ToDoItems'
import Categories from './Components/Categories/Categories'
import Login from './Components/Auth/Login'
import NotFound from './Components/NotFound'
import AuthProvider from './contexts/AuthContexts';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="todoitems" element={<ProtectedRoute><ToDoItems /></ProtectedRoute>}/>
          <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

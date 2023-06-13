import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchPage from './SearchPage';
import reportWebVitals from './reportWebVitals';
import Product from './Product';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4'
import Product5 from './Product5'
import Product6 from './Product6'
import Chat from './Chat';
import PujarArticle from './PujarArticle'
import Profile from './Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlankPage from './BlankPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div style={{ backgroundColor: '#f9f9f9' }}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/Product1" element={<Product />} />
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
        <Route path="/Product4" element={<Product4 />} />
        <Route path="/Product5" element={<Product5 />} />
        <Route path="/Product6" element={<Product6 />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/PujarArticle" element={<PujarArticle />} />
        <Route path='/Perfil' element={<Profile />} />
        <Route path='/BlankPage' element={<BlankPage />} />

      </Routes>
    </Router>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

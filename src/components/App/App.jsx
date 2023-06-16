import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import './App.css';

function App() {

  return (
    <>
      <div className="page">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route 
            exact path="/" 
            element={
              <Main />
            }>  
          </Route>
          <Route 
            path="*" 
            element={
              <PageNotFound/>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </>
  );
}

export default App;

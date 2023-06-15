import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import './App.css';

function App() {

  return (
    <>
      <div className="page">
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
      </div>
    </>
  );
}

export default App;

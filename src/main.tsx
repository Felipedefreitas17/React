import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/';
import ListaServicos from './pages/ListaServicos';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

//Estilezacao global
import "./index.css"

//
import { BrowserRouter, Routes, Route } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter> {/* indica que aplicacao tera rotas */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ListaServicos' element={<ListaServicos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>



)

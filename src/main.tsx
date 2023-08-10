import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/';
import ListaServicos from './pages/ListaServicos';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

//Estilezacao global
import"./index.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Header />
    <Home />
    <Footer />
    
     {/* <ListaServicos />  */}
  </React.StrictMode>,
)

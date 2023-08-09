import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/';

//tstilezacao global
import"./index.css"
import ListaServicos from './pages/ListaServicos';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListaServicos />
  </React.StrictMode>,
)

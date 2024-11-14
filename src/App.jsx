import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom';
import './css/App.css';
// import useCustomizer from './hooks/useCustomizer.js';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Links />
        <Footer />
      </HashRouter>
    </>
  )
}

export default App

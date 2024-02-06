import { useState } from 'react'
import './App.css'
import './index.css'
import Nav from '../components/nav';
import Footer from '../components/footer';
import Intro from '../components/intro';
import Gallery from '../components/gallery';
import React from 'react';

function App () {
  return (
      <>
        <Nav />
        <Intro />
        <Gallery />
        <Footer />
      </>
  )
}

export default App

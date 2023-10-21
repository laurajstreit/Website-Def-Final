import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwitterIcon from '@mui/icons-material/Twitter';

function Nav () {
  return (
    <nav class="text-white w-full flex h-20 px-10 bg-zinc-900 sticky top-0 drop-shadow-md items-center gap-x-6">
      <div className="text-4xl font-black block">
        <a href="/">
          <p className="">Laura Streit</p>
        </a>
      </div>
      <FlexContainer></FlexContainer>
      <div className="flex flex-row-reverse">
        <ul className="flex gap-x-6 text-white text-sm">
              <li>test</li>
              <li>test</li>
              <li>test2</li>
          </ul>
      </div>
    </nav>
  )
}

function FlexContainer () {
  return (
    <div className="flex-grow">

    </div>
  )
}

function Footer () {
  return (
<div className="w-full flex flex-col items-center justify-center pt-5 pb-5 space-y-2">
      <div className="text-white text-sm opacity-70">
        © Copyright 2023 by Laura Streit
      </div>
      <div className="flex flex-row gap-2">
        <TwitterIcon className='opacity-20 hover:transition-opacity hover:opacity-100 ease-in-out duration-200' />
      </div>
    </div>
  )
}

function App () {

  return (
      <>
        <Nav />
        <Footer />
      </>
  )
}

export default App

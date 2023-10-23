import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedIn from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function Nav () {
  return (
    <nav class="text-white w-full flex h-20 px-10 bg-lilipurple sticky top-0 drop-shadow-sm items-center gap-x-6">
      <div className="text-4xl font-black block">
        <a href="/">
        <img class="w-11" src="/src/assets/lsLogo.svg"></img>
        </a>
      </div>
      <FlexContainer></FlexContainer>
      <div className="flex flex-row-reverse">
        <ul className="flex gap-x-6 text-white text-sm">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
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

function IntroductionSection () {
  return (
    <div className="w-auto flex justify-center mt-32 mb-8">
        <div className="">
          <h1 className="font-black">Hi 👋 I'm Laura Streit</h1>
          <h2 className="mt-4 font-regular">A creative doing social media marketing in the gaming industry.</h2>
          <h2 className="font-regular">I've worked with Nexon and HTC, as well as many other gaming brands!</h2>
        </div>
    </div>
  )
}

function GalleryColumns () {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center">
      <div className="m-2"><img class="max-w-2xl rounded-xl" src="/src/assets/galleryImages/mapleMemories.png"></img></div>
      <div className="m-2"><img class="max-w-2xl rounded-xl" src="/src/assets/galleryImages/msSocialStrategy.png"></img></div>
      <div className="m-2"><img class="max-w-2xl rounded-xl" src="/src/assets/galleryImages/kdSocialStrategy.png"></img></div>
      <div className="m-2"><img class="max-w-2xl h-full rounded-xl object-cover" src="/src/assets/galleryImages/mute your mic behance_cover.png"></img></div>
      <div className="m-2"><img class="max-w-2xl rounded-xl object-cover" src="/src/assets/galleryImages/theneutral_1400x1400.png"></img></div>
      <div className="m-2"><img class="max-w-2xl h-full rounded-xl object-cover" src="/src/assets/galleryImages/htc deck cover image.png"></img></div>
      <div className="m-2"><img class="max-w-2xl rounded-xl object-cover" src="/src/assets/galleryImages/womenofesports_cover.png"></img></div>
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
        <LinkedInIcon className='opacity-20 hover:transition-opacity hover:opacity-100 ease-in-out duration-200' />
        <MailIcon className='opacity-20 hover:transition-opacity hover:opacity-100 ease-in-out duration-200' />
      </div>
    </div>
  )
}

function App () {

  return (
      <>
        <Nav />
        <IntroductionSection />
        <GalleryColumns />
        <Footer />
      </>
  )
}

export default App

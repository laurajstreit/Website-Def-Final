import React from 'react';

function Nav () {
    return (
      <nav class="text-white w-full flex h-20 px-10 bg-lilipurple sticky top-0 drop-shadow-sm items-center gap-x-6 z-50">
        <div className="text-4xl font-black block">
          <a href="/about/">
          <img class="w-11 opacity-100 hover:transition-opacity hover:opacity-70 ease-in-out duration-500" src="/src/assets/lsLogo.svg"></img>
          </a>
        </div>
        <div className="flex-grow">
        </div>
        <div className="flex flex-row-reverse">
          <ul className="flex gap-x-6 text-white text-sm opacity-100">
                <li className='opacity-100 transition-opacity hover:opacity-70 ease-in-out duration-500'>About</li>
                <li className='opacity-100 transition-opacity hover:opacity-70 ease-in-out duration-500'>Work</li>
                <li className='opacity-100 transition-opacity hover:opacity-70 ease-in-out duration-500'>Contact</li>
            </ul>
        </div>
      </nav>
    )
  }

export default Nav;
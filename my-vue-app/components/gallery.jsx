import React from 'react';

function Gallery () {
    return (
      <div className="w-full flex flex-row flex-wrap justify-center">
        <div className="m-2"><img class="max-w-2xl rounded-xl opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/mapleMemories.png"></img></div>
        <div className="m-2"><img class="max-w-2xl rounded-xl opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/msSocialStrategy.png"></img></div>
        <div className="m-2"><img class="max-w-2xl rounded-xl opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/kdSocialStrategy.png"></img></div>
        <div className="m-2"><img class="max-w-2xl h-full rounded-xl object-cover opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/mute your mic behance_cover.png"></img></div>
        <div className="m-2"><img class="max-w-2xl rounded-xl object-cover opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/theneutral_1400x1400.png"></img></div>
        <div className="m-2"><img class="max-w-2xl h-full rounded-xl object-cover opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/htc deck cover image.png"></img></div>
        <div className="m-2"><img class="max-w-2xl rounded-xl object-cover opacity-100 hover:transition-color hover:grayscale hover:opacity-70 ease-in-out duration-1000" src="/src/assets/galleryImages/womenofesports_cover.png"></img></div>
      </div>
    )
  }

export default Gallery;
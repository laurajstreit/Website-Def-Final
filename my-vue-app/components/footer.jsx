import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function Footer () {
    return (
  <div className="w-full flex flex-col items-center justify-center pt-5 pb-5 space-y-2">
        <div className="text-white text-sm opacity-70">
          © Copyright 2025 by Laura Streit
        </div>
        <div className="flex flex-row gap-2">
          <div className="opacity-20 transition-opacity hover:opacity-100 ease-in-out duration-500"><TwitterIcon className=''/></div>
          <div className="opacity-20 transition-opacity hover:opacity-100 ease-in-out duration-500"><LinkedInIcon className=''/></div>
          <div className="opacity-20 transition-opacity hover:opacity-100 ease-in-out duration-500"><MailIcon className='' /></div>
        </div>
      </div>
    )
  }
  
export default Footer;
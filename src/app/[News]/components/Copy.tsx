"use client"
import React, { useState } from 'react';

const Copy = ({ link }: any) => {
  const [state, setState] = useState(false);

  const copyToClipboard = () => {
    const linkToCopy = `http://localhost:3000/${link}`;
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        setState(true);
        setTimeout(() => {
          setState(false);
        }, 1000); // پس از یک ثانیه مقدار state را به `false` تغییر دهید
      })
      .catch((error) => {
        console.error('خطا در کپی کردن لینک:', error);
      });
  };

  return (
    <div className=' bg-gray-300 px-3 py-2 my-1  ml-1 text-left flex flex-row'>
      <div onClick={copyToClipboard} className={` ${state === true ? 'tooltip tooltip-open' : ''} tooltip-bottom`} data-tip="کپی شد">
        <img src="/bxs_copy.svg" alt="copy" className='ml-8 cursor-pointer' />
      </div>
      http://localhost:3000/{link}
    </div>
  );
};

export default Copy;

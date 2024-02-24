"use client";
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        const init = async () => {
          const { Offcanvas, Ripple, initTE } = await import("tw-elements");
          initTE({ Offcanvas, Ripple });
        };
        init();
      }, []);
  return (
    <div>
<button
//   classNameName="mr-1.5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
  type="button"
  data-te-offcanvas-toggle
  data-te-target="#offcanvasTop"
  aria-controls="offcanvasTop"
  data-te-ripple-init
  data-te-ripple-color="light">
  <img src="/carbon_search.svg" alt="menu" />
</button>

<div
  className="invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] flex h-1/3 max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
//   tabindex="-1"
  id="offcanvasTop"
  aria-labelledby="offcanvasTopLabel"
  data-te-offcanvas-init>
  <div className="flex items-center justify-between p-4">
    <h5 className="mb-0 font-semibold leading-normal" id="offcanvasTopLabel">
        جست و جو کنید 
    </h5>
    <button
      type="button"
      className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      data-te-offcanvas-dismiss>
      <span
        className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    </button>
  </div>
  <div className="flex-grow overflow-y-auto p-4">
  
  <div className="mb-3">
  <div className="relative mb-4 flex w-1/3 mx-auto flex-wrap items-stretch rounded border border-solid border-neutral-300 focus:text-neutral-700 focus:border-primary" >

    <input
      type="search"
      className="relative m-0 block min-w-0 flex-auto   bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="جست و جو کنید"
      aria-label="Search"
      aria-describedby="button-addon2"
      />

    {/* <!--Search icon--> */}
    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
 
   
  </div>
</div>
  </div>
</div>
    </div>
  )
}

export default page
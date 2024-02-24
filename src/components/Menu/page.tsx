"use client";
import React, { useEffect } from 'react'
// import { Offcanvas, Ripple, initTE } from "tw-elements";

const page = ({menuItems}:any) => {
    useEffect(() => {
        const init = async () => {
          const { Offcanvas, Ripple, initTE } = await import("tw-elements");
          initTE({ Offcanvas, Ripple });
        };
        init();
      }, []);
      const Menus = [
        {id:1,name:"صفحه نخست",link:"/",sub:[{name:"خانه یک",id:1},{id:2,name:"خانه 2"},{name:"خانه سه",id:3}]},
        {id:2,name:"سیاسی",link:"/",sub:[{id:1,name:"سیاست 1"} , {id:2,name:"سیاست 2"},{id:3,name:"سیاست 3"}]},
        {id:3,name:"فرهنگی",link:"/"},
        {id:4,name:"بین  المللی",link:"/"},
        {id:5,name:"تماس با ما",link:"/"},
        {id:6,name:"تماس درباره ما",link:"/"},
    ]
    return (
      <div>
        <button
        //   className="mr-1.5 inline-block rounded      uppercase leading-normal  transition duration-150 ease-in-out   focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          type="button"
          data-te-offcanvas-toggle
          data-te-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          data-te-ripple-init
          data-te-ripple-color="light">
            <img src={"/mingcute_menu-fill.svg"} alt='menu' width={50} height={50}/>
        </button>
  
        <div
          className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        //   tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          data-te-offcanvas-init>
          <div className="flex items-center justify-between p-4">
            <h5
              className="mb-0 font-semibold leading-normal"
              id="offcanvasRightLabel">
              انتخاب کنید
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>
          <div className="offcanvas-body flex-grow overflow-y-auto p-4">
            <ul>
             {Menus.map((item: any)=>(
                    <li key={item.id} className='md:mx-4 py-2'>
                        {item.name}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  

export default page
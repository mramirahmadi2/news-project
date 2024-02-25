import React from 'react'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col justify-between md:flex-row md:w-[50rem] w-[95%] mx-auto '>
          <div className='flex flex-col'>
            <h2> ما را دنبال کنید</h2>
            <ul className='flex flex-row '>
                <li className='mx-2'>Icon</li>
                <li className='mx-2'>Icon</li>
                <li className='mx-2'>Icon</li>
                <li className='mx-2'>Icon</li>
                <li className='mx-2'>Icon</li>
                <li className='mx-2'>Icon</li>
            </ul>
          </div>
          <div>
            <h2> با ما در تماس باشید</h2>
            <ul className='flex flex-row '>
                <li> تماس با ما</li>
                <li className='mr-4'>در باره هفت تیر</li>

            </ul>
          </div>
        </div>
        
        <div className='w-[100vw]  bg-gray-300  h-auto py-1'>
            <h2 className=' text-center'>نقل و نشر مطالب با ذکر منبع بلامانع است.</h2>
        </div>
    </div>
  )
}

export default page
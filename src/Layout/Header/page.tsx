import Image from 'next/image'
import React from 'react'

const page = () => {
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
        <div className='flex flex-row max-w-7xl mx-auto  justify-between items-center'>
            <div>menu</div>
            <div className='bg-[#E71319] w-[393px] h-[104px] p-3 flex flex-col items-center'>
                <Image src={'/avatar/logoroz.png'} alt='header' width={300} height={55} />
                <p className='text-white  text-center'>روزنامه ای برای همه مردم ایران</p>
            </div>
            <div>serch</div>
        </div>
        <div className='border-t-2 border-b-2'>
          <div className='max-w-7xl mx-auto text-center'>
            <ul className='flex flex-col md:flex-row justify-center items-center '>
                {Menus.map((item)=>(
                    <li key={item.id} className='md:mx-4 py-2'>
                        {item.name}
                    </li>
                ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default page
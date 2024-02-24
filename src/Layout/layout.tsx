import React, { Children } from 'react'
import Header from "./Header/page"
import Footer from "./Footer/page"
const layout = ({children}:{children:any}) => {
  return (
    <div className='flex flex-col justify-between'>
        <Header/>
         <div className=''>{children}</div>
        <Footer/>
    </div>
  )
}

export default layout
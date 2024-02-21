import React, { Children } from 'react'
import Header from "./Header/page"
import Footer from "./Footer/page"
const layout = ({children}:{children:any}) => {
  return (
    <div>
        <Header/>
         {children}
        <Footer/>
    </div>
  )
}

export default layout
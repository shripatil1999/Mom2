import React from 'react'
import Header from '../../header/Header'
import Navbar from '../../navbar/Navbar'

const GlobalLayout = ({children}) => {
  return (
    <div className=''>
      <Header/>
      <div className="grid grid-cols-5">
        <div className="col-span-0 z-100">
            <Navbar/>
        </div>
        <div className="col-span-4 mt-32">
            {children}
        </div>
      </div>
    </div>
  )
}

export default GlobalLayout

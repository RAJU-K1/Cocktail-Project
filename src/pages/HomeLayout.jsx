import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'


const HomeLayout = () => {
 const navigate= useNavigation()
 const isPageLoading=navigate.state==="loading";
const value="some value";

  return (
    <>
       <Navbar/>
       <section className="page">
        {isPageLoading?<div className='loading'></div>:<Outlet context={{value}}/>}     
       </section>
        
        
    </>
  )
}

export default HomeLayout
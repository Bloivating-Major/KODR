import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'
import { useSelector } from 'react-redux'
const Layout = () => {

  const statusTabCart = useSelector( store => store.cart.statusTab);

  return (
    <div className='bg-zinc-200 dark:bg-gray-900 transition-all duration-500'>
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 min-h-screen
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>
            <Header />
            <Outlet />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout

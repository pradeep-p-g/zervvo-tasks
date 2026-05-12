import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

export default function AppLayout() {
  return (
    <div>
        <Navbar />
        <main className='min-h-screen'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

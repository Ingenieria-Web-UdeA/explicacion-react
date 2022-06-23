import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';

const PrivateLayout = () => {
  return (
    <main className='flex h-screen'>
      <aside className='bg-gray-900 hidden md:flex w-80'>Sidebar</aside>
      <div className='w-full h-screen flex flex-col'>
        <Navbar />
        <div className='flex-grow'>
          <Outlet />
        </div>
        <footer className='md:hidden'>Footer</footer>
      </div>
    </main>
  );
};

export default PrivateLayout;

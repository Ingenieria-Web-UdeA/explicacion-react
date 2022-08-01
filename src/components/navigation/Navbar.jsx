import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import NuevoDatoCurioso from 'components/datos-curiosos/NuevoDatoCurioso';

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const clickBoton = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <>
      <div className='md:hiden'>
        <nav className='flex items-center gap-3 p-3 bg-gray-900 md:hidden text-white'>
          <button type='button' onClick={clickBoton} className='text-3xl'>
            {mostrarMenu ? <MdMenuOpen /> : <MdMenu />}
          </button>
          <span>Este es el navbar</span>
        </nav>
        {mostrarMenu && (
          <div className='bg-gray-300 p-3 flex flex-col'>
            <span>Opcion 1</span>
            <span>Opcion 2</span>
            <span>Opcion 3</span>
            <span>Opcion 4</span>
          </div>
        )}
      </div>
      <div className='md:block'>
        <nav className='bg-gray-700 p-4 flex justify-between items-center'>
          <span>Navbar</span>
          <button
            type='button'
            className='primary'
            onClick={() => setOpen(true)}
          >
            Crear nuevo
          </button>
        </nav>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <NuevoDatoCurioso setOpen={setOpen} />
      </Dialog>
    </>
  );
};

export default Navbar;

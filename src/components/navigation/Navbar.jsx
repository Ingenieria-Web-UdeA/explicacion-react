import React from 'react';
import { useState } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const miFuncionDeClick = () => {
    console.log('el usuario hizo click');
    console.log(mostrarMenu);
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <>
      <nav className='flex items-center gap-3 md:hidden'>
        <button onClick={miFuncionDeClick}>{mostrarMenu ? <MdMenuOpen /> : <MdMenu />}</button>
        Navbar
      </nav>
      {mostrarMenu && <div className='bg-blue-500'>esto es un menu adicional</div>}
    </>
  );
};

export default Navbar;

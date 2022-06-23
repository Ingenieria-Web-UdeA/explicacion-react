import React from 'react';
import { useEffect, useState } from 'react';

const IndexAdminPage = () => {
  
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
  });

  useEffect(() => {
    console.log('el form cambio');
    console.log(formData);
    if (formData.nombre === 'Daniel' && formData.apellido === 'Saldarriaga') {
      setMostrarAlerta(true);
    } else {
      setMostrarAlerta(false);
    }
  }, [formData]);

  return (
    <div className='p-10'>
      <h1>Esto es un form</h1>
      <form>
        <input
          className='p-2 outline-none border rounded-lg focus:border-indigo-500'
          placeholder='ejemplo'
          value={formData.nombre}
          onChange={(e) => {
            setFormData({ ...formData, nombre: e.target.value });
          }}
        />
        <input
          value={formData.apellido}
          onChange={(e) => {
            setFormData({ ...formData, apellido: e.target.value });
          }}
          className='p-2 outline-none border rounded-lg focus:border-indigo-500'
          placeholder='apellido'
        />
      </form>
      {mostrarAlerta && <div className='text-red-500 text-3xl font-bold'>ESTO ES UNA ALERTA</div>}
    </div>
  );
};

export default IndexAdminPage;

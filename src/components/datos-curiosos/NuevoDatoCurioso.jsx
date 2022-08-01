/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

const NuevoDatoCurioso = ({ setOpen }) => {
  const [datoCurioso, setDatoCurioso] = useState('');
  const [loading, setLoading] = useState(false);

  const crearDatoCurioso = async (e) => {
    e.preventDefault();
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/facts',
      headers: { 'Content-Type': 'application/json' },
      data: { description: datoCurioso },
    };
    try {
      await axios.request(options);
      toast.success('Dato curioso creado correctamente');
      setOpen(false);
    } catch (err) {
      console.log(err);
      toast.error('Error al crear el dato curioso');
    }

    setLoading(false);
  };

  return (
    <div className='p-6'>
      <h1>Nuevo dato curioso</h1>
      <form onSubmit={crearDatoCurioso} className='flex flex-col p-6 gap-3'>
        <label htmlFor='datoCurioso' className='flex flex-col'>
          <span>Dato curioso</span>
          <input
            className='p-2 outline-none border rounded-lg focus:border-indigo-500'
            name='datoCurioso'
            type='text'
            placeholder='Super dato curioso'
            required
            value={datoCurioso}
            onChange={(e) => setDatoCurioso(e.target.value)}
          />
        </label>
        <button className='primary flex justify-center' type='submit'>
          {loading ? (
            <ReactLoading type='spin' color='#fff' height={30} width={30} />
          ) : (
            <span>Crear dato curioso</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default NuevoDatoCurioso;

/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';

const useLoadDatosCuriosos = () => {
  const [datosCuriosos, setDatosCuriosos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultarDatosCuriosos = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/facts');
      console.log(response);
      const arrayOfFacts = response.data.facts.map((fact) => fact.description);
      setDatosCuriosos(arrayOfFacts);
      setLoading(false);
    };
    consultarDatosCuriosos();
  }, []);

  return {
    datosCuriosos,
    loading,
  };
};

export { useLoadDatosCuriosos };

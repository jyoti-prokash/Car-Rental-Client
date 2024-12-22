import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CarCard from '../../Components/CarCard';

const AvailableCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/cars`)
        .then(res=>{
            setCars(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    
    return (
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {cars.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))}
        </div>
      </div>
    );
};

export default AvailableCars;
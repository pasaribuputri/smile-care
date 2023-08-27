import React, { useEffect, useState } from 'react';
import CardDoktor from '../../components/CardDoktor';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]); 
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/api/doctors/", {
      method: "GET",
    })
      .then((response) => response.json()) 
      .then((data) => setDoctors(data)) 
  }, []);

  return (
    <>
      <div className='py-7 px-3 pt-24'>
        <h1 className='font-bold font-helvetica text-xl flex justify-center p-2'>Our Doctors</h1>
        <hr className='p-2 h' />
        <div className='justify-center flex-wrap flex flex-row gap-10'>
          {doctors.map((val) => (
            <CardDoktor key={val.id_dokter} imageUrl={val.gambar} name={val.nama} specialization={val.spesialis} onClick = {()=> navigate(`/doctors/detail-doctor/${val.id_dokter}`)}/> 
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;

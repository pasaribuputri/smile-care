import React, { useEffect, useState } from 'react';
import DoctorDetail from '../../../components/DoctorDetail';
import { useParams } from 'react-router-dom';

const DetailDoctor = () => {
  const [doctor, setDoctor] = useState({});
  const {id_dokter} = useParams()

  useEffect(()=>{
    fetch(`http://localhost:3000/api/doctors/${id_dokter}`,{
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((response)=>response.json())
    .then((data)=>{
      setDoctor(data[0]);
    })
    
}, [id_dokter])

  return(
    <div className='py-7 px-7 pt-28'>
        <DoctorDetail doctor={doctor}/>
    </div>
  )

};

export default DetailDoctor;

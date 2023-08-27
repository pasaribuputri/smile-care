import React, { useEffect, useState } from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import CardDoktor from './CardDoktor';

const ServiceDetail = ({service}) => {
    const [manfaat, setManfaat] = useState(null)
    const [doctors, setDoctors] = useState([]); 
    const navigate = useNavigate()
    
    useEffect(()=> {
        const dataManfaat = service.manfaat?.split(",")
        setManfaat(dataManfaat)
        console.log(typeof service);
        if(Object.keys(service).length != 0){
            console.log("service");
            fetch(`http://localhost:3000/api/doctors/${service.id_dokter}`, {
            method: "GET",
            })
            .then((response) => response.json()) 
            .then((data) => setDoctors(data[0])) 
        }
    }, [service])
    console.log(doctors);

  return (
    <div className='lg:px-20 ' >
        <div className='mb-10'>
            <p className='text-3xl mb-5 text-blue-950 font-bold'>{service.service}</p>
            <img className='rounded-xl' src={service.gambar} alt={service.service} />
        </div>
        <div className='mb-10'>
            <p className='text-xl  text-blue-950 font-bold mb-3'>HOW {service.service?.toUpperCase()} CREATE A PERFECT SMILE ?</p>
            <p>{service.deskripsi}</p>
        </div>
        <div>
            <p className='font-bold  text-blue-950 text-xl mb-3'>WHY {service.service?.toUpperCase()} ?</p>
            <ul className='ms-4'>
                {
                    manfaat?.map((val, idx)=>(
                        <li key={idx} >
                            <div className='flex items-center gap-2 mb-2'>
                                <BsCheckCircleFill className='text-blue-900'></BsCheckCircleFill>
                                <div>{val}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <p className='font-bold  text-blue-950 text-xl mt-7'>DOKTER TERKAIT</p>
        <div className='mt-4 mx-2'>
            <CardDoktor key={doctors?.id_dokter} imageUrl={doctors?.gambar} name={doctors?.nama} specialization={doctors?.spesialis} onClick = {()=> navigate(`/doctors/detail-doctor/${doctors?.id_dokter}`)}/> 
        </div>
    </div>
  )
}

export default ServiceDetail
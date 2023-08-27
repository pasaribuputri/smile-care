import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/card'

const Services = () => {
  const navigate = useNavigate()
  const [service, setService] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/api/services",{
      method: "GET"
    })
    .then((response)=> response.json())
    .then((data)=> {setService(data.data);})
  },[])

  return (
    <div className='py-7 px-7 pt-24'>
      <h1 className="font-bold text-xl flex justify-center p-2">Services</h1>
        <hr className='p-2 h'/>
        <div className="justify-center flex-wrap flex flex-row gap-10">
           {service.map((val)=> (
              <Card key={val.id_service} imageUrl={val.gambar} title={val.service} onClick={()=> navigate(`/detail-services/${val.id_service}`)}/>
           ))}
        </div>
    </div>
  )
}

export default Services
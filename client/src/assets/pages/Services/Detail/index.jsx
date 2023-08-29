import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ServiceDetail from '../../../components/ServiceDetail'

const DetailServices = () => {
    const [service, setServices] = useState([])
    const {id_service} = useParams()
    

    useEffect(()=>{
        fetch(`http://localhost:3000/api/services/${id_service}`,{
          method: "GET",
          credentials: "include",
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then((response)=> response.json())
        .then((data)=> {setServices(data.data[0]);})
    }, [id_service])
  return (
    <div className='py-7 px-7 pt-28'>
        <ServiceDetail service={service}/>
        {/* <div>{service.service}</div> */}
    </div>
  )
}

export default DetailServices
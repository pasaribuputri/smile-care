import React from 'react'
import Card from '../../components/card'
import { gambar } from '../../../data/galery-smile'
import { useNavigate } from 'react-router-dom'

const SmileGalery = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='py-7 px-7 pt-24'>
      <h1 className='font-bold text-xl font-helvatica  flex justify-center p-2'>Smile Galery</h1>
      <hr className='p-2 h'/>
      <div className='justify-center flex-wrap flex flex-row gap-10'>
      {
        gambar.map((val)=>(
          <Card key={val.id} imageUrl={val.foto} title={val.judul} onClick = {()=> navigate(`/smile-galery/detail/${val.id}`)}/>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default SmileGalery
import React from 'react'
import CardDoktor from '../../components/CardDoktor'

const Doctors = () => {
  return (
    <>
    <div className='py-7 px-7 pt-24'>
      <h1 className='font-bold font-helvatica text-xl  flex justify-center p-2'>Our Doctors</h1>
      <hr className='p-2 h'/>
      <div className='justify-center flex-wrap flex flex-row gap-10'>
        <CardDoktor/>
      </div>
    </div>
    </>
  )
}

export default Doctors
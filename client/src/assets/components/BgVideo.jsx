import React from 'react'

const BgVideo = () => {
  return (
    <div className="relative h-screen">
        <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
            <source src='/video/video.mp4' type='video/mp4'/>
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-100">
            <h1 className="text-white text-4xl lg:text-7xl font-bold font-helvatica">SmileCare.id</h1>
            <p className="text-white text-xl lg:text-2xl italic font-helvatica">Klinik Gigi Anda untuk Senyum yang Lebih Cerah</p>
        </div>
    </div>
  )
}

export default BgVideo
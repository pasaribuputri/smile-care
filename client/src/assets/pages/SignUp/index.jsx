import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {LiaTimesCircle} from 'react-icons/lia'

const SignIn = () => {
  const [userSignUp, setUserSignUp] = useState({nama: '', no_hp: '',email : '',password: ''})
  const navigate = useNavigate()


   const saveData = (payload) => {
    fetch("http://localhost:3000/api/users/add",{
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=> response.json())
    .then((res)=> alert(res.message))
  }

  return (
      <div className="h-screen w-screen flex">
        <div className="modal w-1/3 rounded-lg h-1/3 absolute m-auto left-0 right-0 top-0 bottom-0">
            <div className="modal-header px-2 pt-2 h-1/3 z-10 bg-blue-950">
                <LiaTimesCircle className='float-right' size={24}/>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer"></div>
        </div>
        <div className="w-[55%] flex justify-center flex-col items-center text-white h-full bg-blue-950 opacity-80 ">
          <p className='text-4xl font-bold'>SmileCare.id</p>
          <p className='text-xl italic'>Klinik gigi anda untuk senyum yang lebih cerah</p>
        </div>
        <div className="w-[45%] h-full flex flex-col justify-center items-center bg-white">         
              <form className='w-1/2 flex flex-col' onSubmit={(e)=> {
                e.preventDefault();
                saveData(userSignUp)
              }}>
                <div className='mb-12 '>
                  <p className='text-3xl text-center font-bold'>Create Account</p>
                  <p className='text-base text-center'>Please enter your details</p>
                </div>
                <label htmlFor="">Nama</label>
                <input type="text" required className='border-b border-black outline-none mb-4' onChange={(e)=> setUserSignUp({...userSignUp, nama: e.target.value})}/>
                <label htmlFor="">No HP</label>
                <input type="text" required className='border-b  border-black outline-none mb-4' onChange={(e)=> setUserSignUp({...userSignUp, no_hp: e.target.value})}/>
                <label htmlFor="">Email</label>
                <input type="email" required className='border-b border-black outline-none mb-4' onChange={(e)=> setUserSignUp({...userSignUp, email: e.target.value})}/>
                <label htmlFor="">Password</label>
                <input type="password" required  className='border-b  border-black outline-none mb-4' onChange={(e)=> setUserSignUp({...userSignUp, password: e.target.value})}/>
                <button className='mt-8 text-white rounded-full bg-blue-950 opacity-80 py-2 hover:opacity-60'>Sign Up</button>
              </form>
                <div className='flex justify-center mt-4'>
                  <p className='me-1'>Have an account?</p>
                  <button type='button' className="text-blue-950" onClick={()=> navigate("/login")}>Sign In</button>
                </div>
        </div>
    </div>
  )
}

export default SignIn
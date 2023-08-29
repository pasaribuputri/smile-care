import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userSignIn, setUserSignIn] = useState({email : '',password: ''})
  const navigate = useNavigate()

  return (
      <div className="h-screen w-screen flex">
        <div className="w-[55%] flex justify-center flex-col items-center text-white h-full bg-blue-950 opacity-80 ">
          <p className='text-4xl font-bold'>SmileCare.id</p>
          <p className='text-xl italic'>Klinik gigi anda untuk senyum yang lebih cerah</p>
        </div>
        <div className="w-[45%] h-full flex flex-col justify-center items-center bg-white">
              <form className='w-1/2 flex flex-col' onSubmit={async(e)=> {
                e.preventDefault();
                try{
                  const response = await fetch("http://localhost:3000/api/auth/login",{
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userSignIn)
                  })
                  if(response.ok){
                    const data = await response.json();
                    setUserSignIn(data)
                    console.log(data);
                    localStorage.setItem("userLogin",JSON.stringify(data.data.userLogin))
                    localStorage.setItem("token", data.data.token)
                    navigate("/")
                  }else{
                    const errorData = await response.json();
                    alert(errorData.message);
                  }
                }catch(error){
                  console.error("Error:", error);
                  alert("An error occurred. Please try again later.");
                }
                  
                }}>
              <div className='mb-12 '>
                <p className='text-3xl text-center font-bold'>Welcome back!</p>
                <p className='text-base text-center'>Please enter your details</p>
              </div>
              <label >Email</label>
              <input type="email" required className='border-b border-black outline-none mb-4' onChange={(e)=> setUserSignIn({...userSignIn, email: e.target.value})}/>
              <label >Password</label>
              <input type="password" required  className='border-b  border-black outline-none ' onChange={(e)=> setUserSignIn({...userSignIn, password: e.target.value})}/>
              <button type='submit' className='mt-8 text-white rounded-full bg-blue-950 opacity-80 py-2 hover:opacity-60'>Sign In</button>
            </form>
              <div className='flex justify-center mt-4'>
                <p className='me-1'>Don't have an account?</p>
                <button type='button' className="text-blue-950" onClick={()=> navigate("/sign-up")}>Sign Up</button>
              </div>
        </div>
    </div>
  )
}

export default Login
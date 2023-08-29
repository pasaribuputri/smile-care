import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  const [userLogin, setUserLogin] = useState({});
  const [user, setUser] = useState({ nama: '', email: '', no_hp: '' }); // Menambahkan state untuk data pengguna yang diedit
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userLogin')) {
      setUserLogin(JSON.parse(localStorage.getItem('userLogin')));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/users/update/${userLogin.id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type' : 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(userLogin), 
      });

      if (response.ok) {
        const updatedUser = await response.json();
        alert("Data berhasil di edit");
        localStorage.setItem('userLogin', JSON.stringify(userLogin))
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi nanti.');
    }
  };

  return (
    <div className="bg-white pt-24 lg:m-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex gap-5 mb-7">
            <BsPersonCircle size={50} />
            <div className=" ">
              <h1 className="text-xl font-semibold">{userLogin.nama}</h1>
              <h1 className="text-base ">{userLogin.email}</h1>
              <h1>{userLogin.no_hp}</h1>
            </div>
          </div>
          <div className="flex mx-16 gap-5">
            <button
              onClick={() => {
                if (window.confirm('Apakah Anda yakin ingin menghapus akun?')) {
                  fetch(`http://localhost:3000/api/users/delete/${userLogin.id}`, {
                    method: 'DELETE',
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                  })
                    .then((response) => response.json())
                    .then((res) => {
                      alert(res.message);
                      localStorage.clear();
                      navigate('/login');
                    });
                }
              }}
              className="bg-blue-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            >
              Hapus
            </button>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center rounded-lg shadow-xl mt-8 p-6">
          <form className="w-1/2 flex justify-center flex-col" onSubmit={handleSubmit}>
            <div className="mb-12 ">
              <p className="text-3xl text-center font-bold">Edit Account</p>
            </div>
            <label htmlFor="">Nama</label>
            <input
              type="text"
              required
              className="border-b border-black outline-none mb-4"
              value={userLogin.nama} // Menggunakan nilai dari state untuk input
              onChange={(e) => setUserLogin({ ...userLogin, nama: e.target.value })}
            />
            <label htmlFor="">No HP</label>
            <input
              type="text"
              required
              className="border-b  border-black outline-none mb-4"
              value={userLogin.no_hp} // Menggunakan nilai dari state untuk input
              onChange={(e) => setUserLogin({ ...userLogin, no_hp: e.target.value })}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              className="border-b  border-black outline-none mb-4"
              value={userLogin.email} // Menggunakan nilai dari state untuk input
              onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
            />
            <button className="mt-8 text-white rounded-full bg-blue-950 py-2 hover:opacity-60">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;

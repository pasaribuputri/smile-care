import { useEffect, useState } from "react";

const DoctorDetail = ({ doctor }) => {
  console.log(doctor);
    const [keahlian, setKeahlian] = useState(null)
    const [organisasi, setOrganisasi] = useState(null)
    useEffect(()=>{
      const dataKeahlian = doctor.keahlian?.split(",")
      const dataOrganisasi = doctor.organisasi?.split(",")
      setKeahlian(dataKeahlian)
      setOrganisasi(dataOrganisasi)
    }, [doctor])

  return (
    <div className="bg-white mx-4 p-6 shadow-md rounded-md lg:flex">
      <div className="lg:w-1/3 lg:mr-4">
        <img
          src={doctor.gambar}
          alt={doctor.nama}
          className="w-full h-auto rounded-3xl mb-2"
        />
      </div>
      
      <div className="lg:w-2/3 lg:ml-4">
        <h1 className="text-2xl  text-blue-950 font-semibold">{doctor.nama}</h1>
        <p className="text-gray-600 mb-4">{doctor.spesialis}</p>

        <div className="lg:flex lg:justify-between">
          <div className="mb-4 lg:w-1/2 lg:mr-4">
            <h2 className="text-lg  text-blue-950 font-semibold">Jadwal</h2>
            <p>{doctor.hari}</p>
            <p>{doctor.jadwal} WIB</p>
          </div>
        </div>
          <div className="mb-4 lg:w-1/2">
            <h2 className="text-lg  text-blue-950 font-semibold">Keahlian</h2>
            <ul>
            {
              keahlian?.map((val)=> (
                <li className="list-disc ms-6">{val}</li>
              ))
            }
            </ul>
          </div>
        <div>
          <h2 className="text-lg  text-blue-950 font-semibold">Organisasi</h2>
          <ul>
            {
              organisasi?.map((val)=> (
                <li>{val}</li>
              ))
            }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;

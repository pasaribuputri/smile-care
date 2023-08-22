import React from 'react';
import Card from '../../../components/card';
import { detailGambar } from '../../../../data/galery-smile';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const image = detailGambar.find((v) => v.id == id);

  return (
    <>
      <div className='py-7 px-7 pt-24'>
        <h1 className='font-bold font-helvetica text-lg flex justify-center p-2'>
          {image.judul}
        </h1>
        <hr className='p-2 h' />
        <div className='justify-center flex-wrap flex flex-row gap-10'>
          {image.foto.map((val, idx) => (
            <Card key={idx} imageUrl={val} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Detail;

import React from 'react';

function Card(props) {
  return (
    <div onClick={props.onClick} className="lg:max-w-sm rounded overflow-hidden shadow-lg lg:w-1/4 sm:w-full hover:cursor-pointer">
      <img className="w-full" src={props.imageUrl} alt={props.title} />
      <div className="flex justify-center items-center p-2">
        <div className="font-bold text-xl mb-2">{props.title}</div>
      </div>
    </div>
  );
}

export default Card;

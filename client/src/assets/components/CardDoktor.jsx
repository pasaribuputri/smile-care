import React from "react";

const CardDoktor = (props) => {
  return (
    <div className="lg:max-w-xs max-w-md rounded p-5 overflow-hidden shadow-lg lg:w-1/2">
      <img src={props.imageUrl} alt={props.name} className="w-full rounded-bl-full" />
      <div className="px-2 py-4">
        <div className="font-bold text-base mb-2">{props.name}</div>
        <p className="text-gray-700 text-sm">{props.specialization}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-center">
        <button onClick={props.onClick} className="bg-blue-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
          Details
        </button>
      </div>
    </div>
  );
};

export default CardDoktor;

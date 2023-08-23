import React from "react";

const CardDoktor = (props) => {
  return (
    <div className="max-w-sm rounded p-5 overflow-hidden shadow-lg">
      <img src={props.imageUrl} alt={props.name} className="w-full rounded-t" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.specialization}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
          Details
        </button>
      </div>
    </div>
  );
};

export default CardDoktor;

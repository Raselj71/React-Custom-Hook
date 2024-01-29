import React from "react";

function Card(props) {
  const { id, title, completed } = props.data;
  return (
    <div className=" text-white bg-cyan-700 h-[300px] hover:bg-green-600 w-[400px] flex-grow flex justify-center items-center flex-col">
      <p>{title}</p>
      <p>{id}</p>
      <p>{completed}</p>

      <button className="bg-rose-700 px-6 py-2 rounded-md hover:bg-gray-950">
        Delete
      </button>
    </div>
  );
}

export default Card;

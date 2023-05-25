import React from "react";

export const Pet = () => {
  return (
    <div className="mat-5 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">Totoro</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Family: <span className="font-normal normal-case">Aimar</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">aimar@gmail.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        discharged: <span className="font-normal normal-case">10/12/2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        symptoms:{" "}
        <span className="font-normal normal-case">
          {" "}
          He spent a lot of time under the rain Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </span>
      </p>
    </div>
  );
};

import React from "react";

export default function RightPlace({ page, setPage }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-4">
      <div className="flex sm:flex-row flex-col justify-around">
        <div className="items-end justify-end w-full m-1 sm:w-2/4">
          <img
            className="justify-end items-end"
            src="/pulley.jpg"
            alt="img"
            width={350}
            height={350}
          />
        </div>
        <div className="m-1 flex flex-col items-center sm:items-start justify-center w-full sm:w-2/4">
          <div className="text-2xl font-bold">You're in the right place</div>
          <div>
            Brillants gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science and computer science.
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-black text-white px-8 py-2 rounded justify-center mt-5"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

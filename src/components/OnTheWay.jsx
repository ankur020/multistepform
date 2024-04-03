import React from "react";

export default function OnTheWay({ page, setPage }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-4">
      <div className="flex sm:flex-row flex-col justify-around">
        <div className="items-end justify-end w-full m-1 sm:w-2/4">
          <img
            className="justify-end items-end"
            src="/otw.jpg"
            alt="img"
            width={350}
            height={350}
          />
        </div>
        <div className="m-1 flex flex-col items-center sm:items-start justify-center w-full sm:w-2/4">
          <div className="text-2xl font-bold">You're on your way</div>
          <div className="flex mt-10">
            <img src="/start.jpg" alt="img" width={40} />
            <img src="/start.jpg" alt="img" width={40} />
            <img src="/start.jpg" alt="img" width={40} />
            <img src="/start.jpg" alt="img" width={40} />
            <img src="/start.jpg" alt="img" width={40} />
          </div>
          <div className="italic mt-5">
            "Through it's engaging and well structured course, Brilliant has
            taught me mathematical concepts that is previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </div>
          <div className="italic mt-8">--Jacob S.</div>
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

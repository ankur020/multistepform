import React from "react";

export default function Answer({ page, setPage }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-2xl font-bold">
        Learning paths based on your answers
      </div>
      <div className="text-gray-500 mt-5">
        Choose one to get started. You can switch anytime
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-20">
        <div className="relative">
          <div></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 px-2 rounded-full -mt-3">
            <p className="text-sm text-black p-0.5 font-semibold">
              MOST POPULAR
            </p>
          </div>
          <div className="flex border-2 rounded-lg p-2 max-w-80 hover:cursor-pointer hover:border-yellow-300">
            <div>
              <b>Foundational Math</b> build your foundational skill in algebra,
              geometry and probability.
            </div>
            <div>
              <img src="/answer.jpg" alt="img" width={450} />
            </div>
          </div>
        </div>
        <div className="flex border-2 rounded-lg p-2 max-w-80 hover:cursor-pointer hover:border-yellow-300">
          <div>
            <b>Mathematical Thinking</b> build your foundational skill in
            algebra, geometry and probability.
          </div>
          <div>
            <img src="/answer.jpg" alt="img" width={450} />
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-black text-white px-8 py-2 rounded justify-center mt-20"
          onClick={() => window.location.reload()}
        >
          Submit Again
        </button>
      </div>
    </div>
  );
}

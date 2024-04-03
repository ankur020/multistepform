import React, { useEffect } from "react";

export default function Loader({ page, setPage }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => ++prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center">
        <div>
          <img src="/loader.svg" alt="" />
        </div>
        <div className="text-2xl font-bold">
          Finding learning path recommendation for you based on your responses
        </div>
      </div>
      {/* <div>
        <button
          className="bg-black text-white"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page == 6}
        >
          Continue
        </button>
      </div> */}
    </div>
  );
}

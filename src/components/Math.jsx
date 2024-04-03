import React, { useEffect, useState } from "react";

export default function Math({ page, setPage, formData, setFormData }) {
  const [math, setMath] = useState("");
  useEffect(() => {
    if (formData.math) setMath(formData.math);
  }, []);
  useEffect(() => {
    setFormData({ ...formData, math: math });
  }, [math]);
  console.log(math);
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold">
          What is your math comfort level?
        </div>
        <div className="text-gray-600 mt-3">
          Choose the highest level you feel confident in -- you can always
          adjust later.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 gap-4">
          <div
            className={`flex flex-col items-center ${
              math == "introductory"
                ? "border-2 border-yellow-300 rounded-lg shadow-lg"
                : "border-2 rounded-lg"
            } p-2 hover:cursor-pointer hover:border-yellow-300`}
            onClick={() => setMath("introductory")}
          >
            <div className="h-16">
              <img src="/math1.jpg" alt="img" width={100} />
            </div>
            <div>Arithmetic</div>
            <div className="text-2xl text-gray-500">Introductory</div>
          </div>
          <div
            className={`flex flex-col items-center ${
              math == "foundational"
                ? "border-2 border-yellow-300 rounded-lg shadow-lg"
                : "border-2 rounded-lg"
            } p-2 hover:cursor-pointer hover:border-yellow-300`}
            onClick={() => setMath("foundational")}
          >
            <div className="h-16">
              <img src="/math2.jpg" alt="img" width={100} />
            </div>
            <div>Basic Algebra</div>
            <div className="text-2xl text-gray-500">Foundational</div>
          </div>
          <div
            className={`flex flex-col items-center ${
              math == "intermediate"
                ? "border-2 border-yellow-300 rounded-lg shadow-lg"
                : "border-2 rounded-lg"
            } p-2 hover:cursor-pointer hover:border-yellow-300`}
            onClick={() => setMath("intermediate")}
          >
            <div className="h-16 items-center">
              <img src="/math3.jpg" alt="img" width={150} />
            </div>
            <div>Intermediate Algebra</div>
            <div className="text-2xl text-gray-500">Intermediate</div>
          </div>
          <div
            className={`flex flex-col items-center ${
              math == "advanced"
                ? "border-2 border-yellow-300 rounded-lg shadow-lg"
                : "border-2 rounded-lg"
            } p-2 hover:cursor-pointer hover:border-yellow-300`}
            onClick={() => setMath("advanced")}
          >
            <div className="h-16 items-center">
              <img src="/math4.jpg" alt="img" width={100} />
            </div>
            <div>Calculus</div>
            <div className="text-2xl text-gray-500">Advanced</div>
          </div>
        </div>
      </div>
      <div>
        <button
          className={`${
            math == "" ? "bg-gray-500 cursor-not-allowed" : "bg-black"
          } text-white px-8 py-2 rounded justify-center mt-16 hover:border-orange-300`}
          onClick={() => {
            setPage((prev) => prev + 1);
            setFormData({ ...formData, math: math });
          }}
          disabled={math == ""}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

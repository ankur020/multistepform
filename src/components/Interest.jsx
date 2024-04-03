import React, { useState, useEffect } from "react";

export default function Interest({ page, setPage, formData, setFormData }) {
  const [interest, setInterest] = useState("");
  console.log(interest);
  useEffect(() => {
    if (formData.interest) setInterest(formData.interest);
  }, []);
  useEffect(() => {
    setFormData({ ...formData, interest: interest });
  }, [interest]);
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold">
          Which are you most interested in?
        </div>
        <div className="text-gray-600 mt-3">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </div>
        <div className="flex flex-col mt-5 gap-2 w-full">
          <div
            className={`border-2 ${
              interest == "learning" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 py-1 gap-4`}
            onClick={() => {
              setInterest("learning");
            }}
          >
            <img src="/learning.jpg" alt="img" width={40} />
            <p>
              <span>Learning specific skill to advance my career</span>
            </p>
          </div>
          <div
            onClick={() => setInterest("exploring")}
            className={`border-2 ${
              interest == "exploring" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 py-1 gap-4`}
          >
            <img src="/refreshing.jpg" alt="" width={40} />
            <p>
              <span>Exploring new topics I am interested in</span>
            </p>
          </div>
          <div
            onClick={() => setInterest("maths")}
            className={`border-2 ${
              interest == "maths" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 py-1 gap-4`}
          >
            <img src="/exploring.jpg" alt="" width={40} />
            <p>
              <span>Refreshing my maths foundation</span>
            </p>
          </div>
          <div
            onClick={() => setInterest("brain")}
            className={`border-2 ${
              interest == "brain" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 py-1 gap-4`}
          >
            <img src="/exercising.jpg" alt="" width={40} />
            <p>
              <span>Exercising my brain to stay sharp</span>
            </p>
          </div>
          <div
            onClick={() => setInterest("others")}
            className={`border-2 ${
              interest == "others" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 py-1 gap-4`}
          >
            <img src="/something.jpg" alt="" width={40} />
            <p>
              <span>Something else</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className={`${
            interest == "" ? "bg-gray-300 cursor-not-allowed" : "bg-black"
          } text-white px-8 py-2 rounded justify-center mt-5 hover:border-orange-300`}
          onClick={() => {
            setPage((prev) => prev + 1);
            setFormData({ ...formData, interest: interest });
          }}
          disabled={interest == ""}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

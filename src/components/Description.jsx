import React, { useEffect, useState } from "react";

export default function Description({ page, setPage, formData, setFormData }) {
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (formData.desc) setDesc(formData.desc);
  }, []);
  useEffect(() => {
    setFormData({ ...formData, desc: desc });
  }, [desc]);
  console.log(desc);
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold">Which Describes you best?</div>
        <div className="text-gray-600 mt-3">
          This will help us personalise your experience
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <div
            className={`border-2 ${
              desc == "student" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 gap-4`}
            onClick={() => setDesc("student")}
          >
            <img src="/person.jpg" alt="img" width={50} />
            <p className="items-start">
              <span>Student</span>
              <span className="text-gray-600"> or soon to be enrolled</span>
            </p>
          </div>
          <div
            onClick={() => setDesc("professional")}
            className={`border-2 ${
              desc == "professional" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 gap-4`}
          >
            <img src="/professional.jpg" alt="" width={50} />
            <p>
              <span>Professional</span>
              <span className="text-gray-600"> pursuing a career</span>
            </p>
          </div>
          <div
            onClick={() => setDesc("parent")}
            className={`border-2 ${
              desc == "parent" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 gap-4`}
          >
            <img src="/parent.jpg" alt="" width={50} />
            <p>
              <span>Parent</span>
              <span className="text-gray-600"> of a school aged child</span>
            </p>
          </div>
          <div
            onClick={() => setDesc("learner")}
            className={`border-2 ${
              desc == "learner" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 gap-4`}
          >
            <img src="/learner.jpg" alt="" width={50} />
            <p>
              <span>Lifelong Learner</span>
            </p>
          </div>
          <div
            onClick={() => setDesc("teacher")}
            className={`border-2 ${
              desc == "teacher" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 gap-4`}
          >
            <img src="/teacher.jpg" alt="" width={50} />
            <p>
              <span>Teacher</span>
            </p>
          </div>
          <div
            onClick={() => setDesc("other")}
            className={`border-2 ${
              desc == "other" ? "border-yellow-300" : ""
            } hover:border-yellow-300 hover:cursor-pointer rounded flex items-center px-2 gap-4`}
          >
            <img src="/other.jpg" alt="" width={50} />
            <p>
              <span>Other</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className={`${
            desc == "" ? "bg-gray-300 cursor-not-allowed" : "bg-black"
          } text-white px-8 py-2 rounded justify-center mt-5 hover:border-orange-300`}
          onClick={() => {
            setPage((prev) => prev + 1);
            setFormData({ ...formData, desc: desc });
          }}
          disabled={desc == ""}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

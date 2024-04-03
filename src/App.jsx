import React, { useState } from "react";
import Description from "./components/Description";
import Interest from "./components/Interest";
import RightPlace from "./components/RightPlace";
import Math from "./components/Math";
import OnTheWay from "./components/OnTheWay";
import Loader from "./components/Loader";
import Answer from "./components/Answer";
import { FaArrowLeft } from "react-icons/fa6";

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});
  const stepPage = () => {
    if (page == 0) {
      return (
        <Description
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    if (page == 1) {
      return (
        <Interest
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    if (page == 2) {
      return <RightPlace page={page} setPage={setPage} />;
    }
    if (page == 3) {
      return (
        <Math
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    if (page == 4) {
      return <OnTheWay page={page} setPage={setPage} />;
    }
    if (page == 5) {
      return <Loader page={page} setPage={setPage} />;
    }
    if (page == 6) {
      return <Answer page={page} setPage={setPage} />;
    }
  };
  return (
    <div className="m-2">
      <div
        className={`flex gap-1 items-center justify-center ${
          page == 5 || page == 6 ? "hidden" : ""
        }`}
      >
        <span className="flex h-1 items-center">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page == 0}
          >
            <FaArrowLeft />
          </button>
        </span>
        <div className="flex w-full h-2 items-center">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div
              className="h-1 rounded-full bg-green-600"
              style={{ width: `${((page + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div>{stepPage()}</div>
    </div>
  );
}

export default App;

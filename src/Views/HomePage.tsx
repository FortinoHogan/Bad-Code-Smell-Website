import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center pt-48 justify-center flex-col gap-5">
        <h1 className="blackLM text-8xl font-bold">Bad Code Smell</h1>
        <h2 className="redLM text-7xl font-bold">Code Reengineering Project</h2>
        <div className="flex items-center justify-center flex-col mt-10 gap-2">
          <p className="blackLM text-2xl">COMP6106001 - Code Reengineering</p>
          <p className="blackLM text-2xl">
            Lecturer: Rezki Yunanda, S.Kom., M.Kom(D6665)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

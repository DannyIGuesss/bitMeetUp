import React from "react";
import MeetUpForm from "../../components/MeetUpForm";

const Manager = (props: React.FC) => {
  return (
    <div>
      <div className=" bg-red-700 h-16 flex items-center justify-center ">
        <h1 className="text-2xl text-white">Manager Page</h1>
      </div>
      <div>
        <MeetUpForm />
      </div>
      <div></div>
    </div>
  );
};

export default Manager;

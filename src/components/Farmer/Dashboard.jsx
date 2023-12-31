import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Training_Programs from "./Tables/Training_Programs";
import Crop_Advisory from "./Tables/Crop_Advisory";
import Loan_Updates from "./Tables/Loan_Updates";
import Current_Weather from "./Tables/Current_Weather";
const Dashboard = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
          Dashboard
        </h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-6 py-5">
          <div className="text-green-500 text-lg font-bold text-center rounded-lg col-span-4 row-span-3">
            <Slider title={"Store"} />
          </div>
          <div className="text-green-500 text-lg font-bold text-center rounded-lg col-span-3 md:col-span-2 row-span-3">
            <Training_Programs />
          </div>
          <div className="text-green-500 text-lg font-bold text-center rounded-lg col-span-4 row-span-3">
            <Slider title={"Selling Price"} />
          </div>
          <div className="text-green-500 text-lg font-bold text-center rounded-lg col-span-3 md:col-span-2 row-span-3">
            <Crop_Advisory />
          </div>
          <div className="text-green-500 text-lg font-bold text-center rounded-lg col-span-3 row-span-3">
            <Current_Weather />
          </div>
          <div className="text-green-500 text-lg font-bold text-center rounded-lg col-span-3 row-span-3">
            <Loan_Updates />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

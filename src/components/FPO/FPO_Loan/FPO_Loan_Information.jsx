import React, { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Working_Capital_Loan from "./Tabs/Working_Capital_Loan";
import Farmer_Loan from "./Tabs/Farmer_Loan";

const Loan_Information = () => {
  const [active, setActive] = useState("tab1");
  const [openModel, setOpenModel] = useState(false);

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Working_Capital_Loan/>;
  } else if (active === "tab2") {
    tab__UI = <Farmer_Loan />;
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        Loan Information
      </h2>
      <div className="flex items-end justify-Start pb-4">
        {
          active === 'tab1' ? <button
          onClick={() => setOpenModel(true)}
          className="bg-bg__color  text-center text-white px-4 py-1 rounded shadow-md z-0 focus:outline-none"
        >
          Apply for Working Capital Loan Window
        </button> : <button
          onClick={() => setOpenModel(true)}
          className="bg-bg__color  text-center text-white px-4 py-1 rounded"
        >
          Apply for Farmer Loan
        </button> 
        }
      </div>

      <div className="flex gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
        Working Capital Loan
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Farmer Loan
        </button>
      </div>

      <div className="flex items-end justify-Start pb-4">
        <button
          onClick={() => setOpenModel(true)}
          className="bg-bg__color shadow-md z-0 focus:outline-none  text-center text-white px-4 py-1 rounded"
        >
          Apply for Loan
        </button>
      </div>
      {active === 'tab2' ? <div className="flex items-end justify-end pb-4">
        <button
          onClick={() => setOpenModel(true)}
          className="bg-bg__color shadow-md z-0 focus:outline-none  text-center text-white px-4 py-1 rounded"
        >
          Aggregate Repayment
        </button>
      </div> : null}
      {tab__UI}
      {tab__UI}
      {/* {openModel && <Add_Lac closemodel={setOpenModel} />} */}
    </div>
  );
};

export default Loan_Information;

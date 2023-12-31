import React from "react";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";

const FarmerWrapper = () => {
  const list = [
    {
      title: "Dashboard",
      icon: <HomeRoundedIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "dashboard",
    },
    {
      title: "Store",
      icon: (
        <LocalGroceryStoreRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "store",
    },
    {
      title: "Selling Price",
      icon: (
        <MonetizationOnRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "sellingprice",
    },
    {
      title: "Loan",
      icon: (
        <CreditScoreRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "loan",
    },
    {
      title: "Transaction History",
      icon: (
        <AccountBalanceWalletRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "transaction-history",
    },
    {
      title: "Training Programs",
      icon: (
        <TerminalRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "training",
    },
    {
      title: "Crop Advisory",
      icon: (
        <DashboardCustomizeRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "crop-advisory",
    },
    {
      title: "Support",
      icon: (
        <SupportAgentRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "support",
    },
    {
      title: "Settings",
      icon: (
        <SettingsSuggestRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "settings",
    },
  ];

  return (
    <>
      <div className="flex container relative">
        <div className="w-[20%] mx-auto h-full fixed">
          <Sidebar list={list} />
        </div>
        <div className="w-[85%] ml-[260px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FarmerWrapper;

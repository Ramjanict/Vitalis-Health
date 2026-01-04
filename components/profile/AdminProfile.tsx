"use client";
import { removeToken } from "@/store/auth/AuthState";
import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import ButtonWithIcon from "../common/button/ButtonWithIcon";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import CloseButton from "../reuseable/CloseButton";
import CommonTabs from "../reuseable/CommonTabs";
import Preference from "./tab/Preference";
import Profile from "./tab/Profile";
import Security from "./tab/Security";

interface GeneralSettingsForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type tabType = "profile" | "security" | "preferences";
const AdminProfile: React.FC<GeneralSettingsForm> = ({ setIsOpen }) => {
  const [tab, setTab] = useState<tabType>("profile");
  const handleCancel = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(removeToken());
    setIsOpen(false);
  };
  return (
    <CommonBorder size="sm" shadow className="max-w-[512px] relative ">
      <div className=" w-fit ml-auto absolute top-1 right-2.5 ">
        <CloseButton close={handleCancel} />
      </div>

      <CommonHeader size="xl" className="!text-lg !font-bold">
        Admin Profile
      </CommonHeader>
      <CommonHeader size="sm" className=" !text-[#717182]">
        Manage your account settings and preferences
      </CommonHeader>

      <CommonTabs<tabType>
        tabs={["profile", "security", "preferences"]}
        activeTab={tab}
        onTabChange={setTab}
      />

      <div>
        <div>
          {tab === "profile" && <Profile handleCancel={handleCancel} />}{" "}
        </div>
        <div>{tab === "security" && <Security />} </div>
        <div>
          {tab === "preferences" && <Preference handleCancel={handleCancel} />}
        </div>
      </div>

      <div className=" flex justify-between items-center border-t-[1.73px] border-border pt-8">
        <ButtonWithIcon
          onClick={handleSignOut}
          icon={LuLogOut}
          className="!px-4 !py-2 !bg-[#D4183D] !text-white "
          iconClassName=" !text-white"
        >
          Sign Out
        </ButtonWithIcon>
        <CommonHeader size="md" className=" text-[#717182]">
          Last login: Today at 9:24 AM
        </CommonHeader>
      </div>
    </CommonBorder>
  );
};

export default AdminProfile;

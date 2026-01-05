import { SingleUserResponse } from "@/store/user/types/singleUser";
import React, { useState } from "react";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import CloseButton from "../reuseable/CloseButton";
import CommonTabs from "../reuseable/CommonTabs";
import Activity from "./Activity";
import Health from "./Health";
import Profile from "./Profile";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: SingleUserResponse | null;
}
type tabType = "profile" | "health" | "activity";
const UserModal: React.FC<Props> = ({ setOpenModal, user }) => {
  const [tab, setTab] = useState<tabType>("profile");

  const profileData = user?.data.profile;

  return (
    <CommonBorder shadow size="md" className=" max-w-2xl  relative">
      <>
        <div className=" w-fit ml-auto absolute top-1 right-2.5 ">
          <CloseButton close={() => setOpenModal(false)} />
        </div>

        <CommonHeader size="md" className="!text-lg !font-bold !leading-[18px]">
          User Details
        </CommonHeader>

        <CommonHeader size="sm" className="pt-2 !text-[#717182]">
          Comprehensive information about {profileData?.fullName}
        </CommonHeader>
      </>
      <CommonTabs<tabType>
        tabs={["profile", "health", "activity"]}
        activeTab={tab}
        onTabChange={setTab}
      />

      <div>
        <div>{tab === "profile" && <Profile user={user} />} </div>
        <div>{tab === "health" && <Health />} </div>
        <div>{tab === "activity" && <Activity />} </div>
      </div>
    </CommonBorder>
  );
};

export default UserModal;

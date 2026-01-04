"use client";

import CommonButton from "@/components/common/button/CommonButton";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { LuPhone, LuUser } from "react-icons/lu";

const inputClass = {
  input:
    "w-full p-3 rounded-lg bg-[#F3F3F5] leading-[14px] text-sm text-primary focus:outline-none",
  label: "leading-[20px] text-sm text-primary block mb-1",
};
const Profile = ({ handleCancel }: { handleCancel: () => void }) => {
  const [profileData, setProfileData] = useState({
    fullName: "Admin User",
    email: "admin@wellness.com",
    phone: "+1 (555) 123-4567",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Profile saved:", profileData);
    handleCancel();
  };

  // image upload

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div>
      <CommonBorder size="sm" className=" flex items-center  gap-4">
        <div className="w-12 h-12 bg-[#030213] rounded-full flex items-center justify-center overflow-hidden">
          {preview ? (
            <Image
              src={preview}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white text-xl">
              <LuUser />
            </span>
          )}
        </div>

        <div className="space-y-1">
          <CommonHeader className="!leading-[24px]">
            System Administrator
          </CommonHeader>
          <CommonHeader className="!text-[#717182] !leading-[24px]">
            admin@wellness.com
          </CommonHeader>

          <CommonButton
            size="xs"
            variant="secondary"
            onClick={handleButtonClick}
          >
            Change Photo
          </CommonButton>

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </CommonBorder>

      <div className="space-y-4 pt-4">
        <div>
          <label className={inputClass.label}>Full Name</label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
              className={`${inputClass.input} pl-8`}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base">
              <LuUser />
            </span>
          </div>
        </div>

        <div>
          <label className={inputClass.label}>Email Address</label>
          <div className=" relative">
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className={`${inputClass.input} pl-8`}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base">
              <FiMail />
            </span>
          </div>
        </div>

        <div>
          <label className={inputClass.label}>Phone Number</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className={`${inputClass.input} pl-6`}
            />

            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base">
              <LuPhone />
            </span>
          </div>
        </div>
      </div>

      <div className=" flex justify-end items-center gap-4 pb-8 pt-20">
        <CommonButton variant="secondary" className="" onClick={handleCancel}>
          Cancel
        </CommonButton>
        <CommonButton onClick={handleSave} className="">
          Save Changes
        </CommonButton>
      </div>
    </div>
  );
};

export default Profile;

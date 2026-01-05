"use client";
import { FC } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface DashboardSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const DashboardSearch: FC<DashboardSearchProps> = ({
  className,
  value,
  onChange,
}) => {
  return (
    <div
      className={`${className} lg:w-[384px] flex items-center w-full gap-1 border-[1.73px] border-border rounded-lg bg-dark px-3`}
    >
      <span className="text-xl flex items-center justify-center text-[#717182] rounded-full transition-colors duration-200">
        <IoSearchSharp />
      </span>
      <input
        type="text"
        placeholder="Search users..."
        className="flex-grow outline-none bg-transparent text-[#717182] py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DashboardSearch;

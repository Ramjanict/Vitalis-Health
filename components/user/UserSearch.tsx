"use client";
import { statusOptions } from "@/app/(dashboard)/dashboard/users-management/page";
import { CiFilter } from "react-icons/ci";
import CommonSelect from "../common/custom/CommonSelect";
import DashboardSearch from "../reuseable/DashboardSearch";

interface IUserSearchProps {
  status: (typeof statusOptions)[number]["value"];
  setStatus: React.Dispatch<
    React.SetStateAction<(typeof statusOptions)[number]["value"]>
  >;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const UserSearch: React.FC<IUserSearchProps> = ({
  status,
  setStatus,
  search,
  setSearch,
}) => {
  return (
    <div className=" w-full flex items-start justify-between">
      <DashboardSearch value={search} onChange={setSearch} />
      <div className="flex items-start gap-2 ">
        <CommonSelect
          value={status}
          onValueChange={(val) => setStatus(val)}
          item={statusOptions}
          w={100}
          icon={<CiFilter />}
        />
      </div>
    </div>
  );
};

export default UserSearch;

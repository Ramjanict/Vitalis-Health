"use client";

import { useDebounce } from "@/components/common/custom/useDebounce";
import CommonSpace from "@/components/common/space/CommonSpace";
import UserSearch from "@/components/user/UserSearch";
import { useState } from "react";
import UsersTable from "../../../../components/user/UsersTable";
export const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
] as const;
const page = () => {
  const [status, setStatus] =
    useState<(typeof statusOptions)[number]["value"]>("all");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // You can implement debounce if needed
  return (
    <div>
      <UserSearch
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
      <CommonSpace>
        <UsersTable status={status} search={debouncedSearch} />
      </CommonSpace>
    </div>
  );
};

export default page;

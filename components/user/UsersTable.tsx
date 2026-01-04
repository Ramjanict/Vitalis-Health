"use client";
import CommonButton from "@/components/common/button/CommonButton";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import { Badge } from "@/components/ui/badge";
import { AdminUser } from "@/store/user/types/user";
import { useGetAllUsersQuery } from "@/store/user/userManagementApi";
import { Eye } from "lucide-react";
import { useState } from "react";
import { timeAgo } from "../help";
import UserModal from "./UserModal";

const tableHeaders = [
  { label: "Name" },
  { label: "Email" },
  { label: "Status" },
  { label: "Devices" },
  { label: "Join Date" },
  { label: "Last Active" },
  { label: "Actions" },
];

const tableData = {
  table: "min-w-full text-sm text-left text-primary py-3 px-4",
  thead: "border-b-[1.73px] border-border",
  tbody: "border-b-[1.73px] border-border last:border-0",
  td: "py-3 px-4",
};
export default function UsersTable() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const handleOpenModal = (user: AdminUser) => {
    setSelectedUser(user);
    setOpenModal(true);
  };
  const [page] = useState(1);
  const [limit] = useState(10);

  const { data } = useGetAllUsersQuery({ page, limit });

  const users = data?.data.data || [];

  return (
    <>
      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          All Users ({users.length})
        </CommonHeader>

        <div className="overflow-x-auto">
          <table className={tableData.table}>
            <thead>
              <tr className={tableData.thead}>
                {tableHeaders.map((header) => (
                  <th
                    key={header.label}
                    className={`py-3 px-4 font-medium ${
                      header.label === "Actions" ? "text-center" : ""
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={tableData.tbody}>
                  <td className={tableData.td}>{user.name}</td>
                  <td className={tableData.td}>{user.email}</td>
                  <td className={tableData.td}>
                    <Badge
                      variant={
                        user.status === "active" ? "default" : "secondary"
                      }
                      className={
                        user.status === "active"
                          ? "bg-[#030213] text-white rounded-xl px-2 py-1"
                          : "bg-[#ECEEF2] text-[#030213] rounded-xl px-2 py-1"
                      }
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className={tableData.td}>
                    <CommonButton variant="secondary" className="">
                      {user.devices}
                    </CommonButton>
                  </td>
                  <td className={tableData.td}>{timeAgo(user.joinDate)}</td>
                  <td className={tableData.td}>{timeAgo(user.lastActive)}</td>
                  <td className={` ${tableData.td} text-center`}>
                    <button
                      onClick={() => handleOpenModal(user)}
                      className="  cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CommonBorder>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <UserModal setOpenModal={setOpenModal} user={selectedUser} />
        </div>
      )}
    </>
  );
}

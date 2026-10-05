"use client";
import CommonButton from "@/components/common/button/CommonButton";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import { Badge } from "@/components/ui/badge";
import {
  deleteMockUserInStore,
  getMockSingleUser,
  useMockUsers,
} from "@/lib/mockData";
import { UpdateUserRequest } from "@/store/user/types/singleUser";
import { Edit, Eye } from "lucide-react";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";
import AlertDialogBox from "../common/custom/AlertDialogBox";
import LoadingStatus from "../common/custom/LoadingStatus";
import Pagination from "../common/custom/Pagination";
import { timeAgo } from "../help";
import UserModal from "./UserModal";
import UserProfileModal from "./UserProfileModal";

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

interface IUsersTableProps {
  status: "all" | "active" | "inactive";
  search: string;
}

export default function UsersTable({ status, search }: IUsersTableProps) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleOpenModal = (userId: string) => {
    setSelectedUserId(userId);
    setOpenModal(true);
  };

  const [page, setPage] = useState(1);
  const limit = 10;

  const allUsers = useMockUsers();

  const filteredUsers = allUsers.filter((user) => {
    const matchesStatus =
      status === "all" ? true : user.status === status;
    const matchesSearch = search
      ? user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / limit));
  const users = filteredUsers.slice((page - 1) * limit, page * limit);

  const singleUser = selectedUserId ? getMockSingleUser(selectedUserId) : null;

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedProfileUser, setSelectedProfileUser] =
    useState<UpdateUserRequest | null>(null);

  const handleEditProfile = (userId: string) => {
    setSelectedUserId(userId);
    const targetUser = getMockSingleUser(userId);
    if (targetUser) {
      setSelectedProfileUser({
        role: "USER",
        profile: {
          fullName: targetUser.data.profile.fullName,
          gender: targetUser.data.profile.gender || "",
          height: targetUser.data.profile.height || 0,
          weight: targetUser.data.profile.weight || 0,
          language: targetUser.data.profile.language,
          healthGoal: targetUser.data.profile.healthGoal || "",
        },
      });
    }
    setProfileModalOpen(true);
  };

  const handleDeleteUser = async (userId: string) => {
    deleteMockUserInStore(userId);
    toast.success("User soft-deleted successfully");
  };

  return (
    <>
      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          All Users ({filteredUsers.length})
        </CommonHeader>
        <LoadingStatus isLoading={false} items={users} itemName="users" />
        {users.length > 0 && (
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
                      <div className="space-x-2">
                        <button
                          onClick={() => handleOpenModal(user.id)}
                          className="  cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditProfile(user.id)}
                          className="  cursor-pointer"
                        >
                          <Edit className="w-4 h-4" />
                        </button>

                        <AlertDialogBox
                          action={() => handleDeleteUser(user.id)}
                          isLoading={false}
                          trigger={
                            <button className="  cursor-pointer">
                              <RiDeleteBin5Line className="w-4 h-4" />
                            </button>
                          }
                          title="Are you sure you want to delete this user?"
                          description="This action cannot be undone. This will permanently delete the user and remove their data from our servers."
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CommonBorder>

      <div className="py-10">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>

      {openModal && singleUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <UserModal setOpenModal={setOpenModal} user={singleUser} />
        </div>
      )}

      {profileModalOpen && selectedUserId && selectedProfileUser && (
        <UserProfileModal
          setProfileModalOpen={setProfileModalOpen}
          selectedProfileUser={selectedProfileUser}
          selectedUserId={selectedUserId}
        />
      )}
    </>
  );
}

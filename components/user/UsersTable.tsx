"use client";
import CommonButton from "@/components/common/button/CommonButton";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import { Badge } from "@/components/ui/badge";
import { UpdateUserRequest } from "@/store/user/types/singleUser";
import {
  useDeleteSingleUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
} from "@/store/user/userManagementApi";
import { Edit, Eye } from "lucide-react";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";
import AlertDialogBox from "../common/custom/AlertDialogBox";
import LoadingStatus from "../common/custom/LoadingStatus";
import Pagination from "../common/custom/Pagination";
import Spinner from "../common/custom/Spinner";
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
  const statusParam = status === "all" ? undefined : status;
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading } = useGetAllUsersQuery(
    {
      page,
      limit,
      status: statusParam,
      search: search || undefined,
    },
    { refetchOnMountOrArgChange: true }
  );

  const users = data?.data.data || [];

  const { data: singleUser, isLoading: isSingleUserLoading } =
    useGetSingleUserQuery(selectedUserId || "", {
      skip: !selectedUserId,
      refetchOnMountOrArgChange: true,
    });

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedProfileUser, setSelectedProfileUser] =
    useState<UpdateUserRequest | null>(null);

  const handleEditProfile = (selectedUserId: string) => {
    setSelectedUserId(selectedUserId);
    if (singleUser && selectedUserId) {
      setSelectedProfileUser({
        role: "USER",
        profile: {
          fullName: singleUser?.data.profile.fullName,
          gender: singleUser?.data.profile.gender || "",
          height: singleUser?.data.profile.height || 0,
          weight: singleUser?.data.profile.weight || 0,
          language: singleUser?.data.profile.language,
          healthGoal: singleUser?.data.profile.healthGoal || "",
        },
      });
    }
    setProfileModalOpen(true);
  };
  const [deleteSingleUser, { isLoading: isDeleting }] =
    useDeleteSingleUserMutation();
  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteSingleUser(userId);
      toast.success("User soft-deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          All Users ({users.length})
        </CommonHeader>
        {<LoadingStatus isLoading={isLoading} items={users} itemName="users" />}
        {!isLoading && users.length > 0 && (
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
                          isLoading={isDeleting}
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
          totalPages={data?.data.meta.total || 1}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>

      {isSingleUserLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <Spinner />
        </div>
      ) : (
        openModal &&
        singleUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
            <UserModal setOpenModal={setOpenModal} user={singleUser} />
          </div>
        )
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

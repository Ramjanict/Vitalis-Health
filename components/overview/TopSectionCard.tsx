"use client";

import { mockDashboardStats } from "@/lib/mockData";
import { FiActivity } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
import { MdChatBubbleOutline } from "react-icons/md";
import DashBoardCard from "../reuseable/DashBoardCard";

export const loadingList = new Array(4).fill(null);
const isPositiveChange = (change?: string) =>
  change?.trim().startsWith("+") ?? false;

const extractPercentage = (change?: string) => change?.split(" ")[0] ?? "0%";

const TopSectionCard = () => {
  const dashboardData = mockDashboardStats;

  const cardData = [
    {
      title: "Total Users",
      value: dashboardData?.totalUsers ?? 0,
      icon: <LuUsers />,
      trend: {
        percentage: extractPercentage(dashboardData?.totalUsersChange),
        isPositive: isPositiveChange(dashboardData?.totalUsersChange),
      },
    },
    {
      title: "Active Today",
      value: dashboardData?.activeToday ?? 0,
      icon: <FiActivity />,
      trend: {
        percentage: extractPercentage(dashboardData?.activeTodayChange),
        isPositive: isPositiveChange(dashboardData?.activeTodayChange),
      },
    },
    {
      title: "Lab Reports",
      value: dashboardData?.labReports ?? 0,
      icon: <HiOutlineDocumentReport />,
      trend: {
        percentage: extractPercentage(dashboardData?.labReportsChange),
        isPositive: isPositiveChange(dashboardData?.labReportsChange),
      },
    },
    {
      title: "AI Conversations",
      value: dashboardData?.aiConversations ?? 0,
      icon: <MdChatBubbleOutline />,
      trend: {
        percentage: extractPercentage(dashboardData?.aiConversationsChange),
        isPositive: isPositiveChange(dashboardData?.aiConversationsChange),
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default TopSectionCard;

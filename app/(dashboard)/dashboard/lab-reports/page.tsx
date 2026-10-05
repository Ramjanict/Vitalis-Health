"use client";
import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";
import LabCardSection from "@/components/report/LabCardSection";
import LabReport from "@/components/report/LabReport";
import DashboardSearch from "@/components/reuseable/DashboardSearch";
import React from "react";

const LabReportsPage = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <DashboardSearch value={search} onChange={setSearch} />
      <CommonSpace>
        <LabCardSection />
      </CommonSpace>
      <CommonSpaceBottom>
        <LabReport />
      </CommonSpaceBottom>
    </div>
  );
};

export default LabReportsPage;

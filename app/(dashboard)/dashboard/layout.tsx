import DashNavbar from "@/components/common/DashNavbar";
import Sidebar from "@/components/common/sidebar";
import ProtectedDashboard from "@/components/ProtectedDashboard";
import Footer from "@/components/reuseable/Footer";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ProtectedDashboard>
      <div className="h-screen w-full flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full">
          <div className="sticky top-0 z-50">
            <DashNavbar />
          </div>
          <main className="flex-1 overflow-y-auto bg-white p-6">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </ProtectedDashboard>
  );
};

export default Layout;

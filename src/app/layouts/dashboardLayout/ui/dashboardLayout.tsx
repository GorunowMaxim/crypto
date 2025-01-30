import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <main className="w-[90%] h-[90vh] bg-[#0d0a1b] p-8 rounded-[32px] border-solid border-[#272133] border-[1px]">
      <Header />
      <Outlet />
    </main>
  );
};

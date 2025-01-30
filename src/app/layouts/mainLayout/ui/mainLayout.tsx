import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="max-w-[1920px] min-h-[100vh] bg-[#030014] text-white p-3 flex items-center justify-center">
      <Outlet />
    </div>
  );
};

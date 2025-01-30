import { NavLink } from "react-router-dom";

const headerLinks: string[] = ["dashboard", "portfolio", "transactions", "market", "news"];

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img src="" alt="" />
        <h1>CE Web Platform</h1>
      </div>
      <nav className="flex items-center gap-3">
        {headerLinks.map((link: string) => {
          return (
            <NavLink
              className="px-3 py-2 rounded-[18px] text-sm font-medium bg-[#161326] border-solid border-[#272133] border-[1px] text-[#8785a4] transition-all duration-200 hover:bg-[#393647] hover:text-[#abadba]"
              to={`/${link}`}
            >
              {link}
            </NavLink>
          );
        })}
      </nav>
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6 bg-white rounded-[50%]"></div>
        <div className="w-6 h-6 bg-white rounded-[50%]"></div>
        <div className="w-6 h-6 bg-white rounded-[50%]"></div>
      </div>
    </div>
  );
};

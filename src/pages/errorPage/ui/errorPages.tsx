import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-[#030014] flex items-center justify-center">
      <div className="min-w-[50vw] min-h-[50vh]">
        <div className="flex gap-20 justify-center items-center mb-12">
          <p
            className="text-[325px] font-bold text-white animate-reverse-custom-bounce"
          >
            4
          </p>
          <img src="/404-icon.svg" className="h-[325px] translate-x-3" alt="404-icon" />
          <p className="text-[325px] font-bold text-white  animate-custom-bounce">4</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-center text-white text-xl capitalize font-normal max-w-[750px]">
            the page you're looking for can't be found. it's look like you're trying to access a page that either has
            een deleted or never existed...
          </p>
          <NavLink to={'/'} className='py-3 px-6 bg-[#feea6d] rounded font-bold text-sm'>HOME PAGE</NavLink>
        </div>
      </div>
    </div>
  );
};

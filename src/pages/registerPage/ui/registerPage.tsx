import { NavLink } from "react-router-dom"

export const RegisterPage = () => {
  return(
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-[380px] h-[475px] bg-white"></form>
      <NavLink to={'/dashboard'}>go to dashboard</NavLink>
    </div>
  )
}
import { Header } from '@/widgets/header'
import { NavBar } from '@/widgets/navBar'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <main className="w-[90%] h-[90vh] bg-[#0d0a1b] p-8 rounded-[32px] border-solid border-[#272133] border-[1px] flex flex-col gap-10">
      <Header />
      <div className="flex gap-12 h-full">
        <NavBar />
        <Outlet />
      </div>
    </main>
  )
}

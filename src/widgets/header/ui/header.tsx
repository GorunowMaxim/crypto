import { Search } from "@/features/search/ui/search"

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img src="" alt="" />
        <h1>CE Web Platform</h1>
      </div>
      <Search />
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6 bg-white rounded-[50%]"></div>
        <div className="w-6 h-6 bg-white rounded-[50%]"></div>
        <div className="w-6 h-6 bg-white rounded-[50%]"></div>
      </div>
    </div>
  )
}

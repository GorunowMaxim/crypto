import { NavLink } from 'react-router-dom'
import { SearchData } from '../api/api'

type Coins = Pick<SearchData, 'coins'>
type Coin = Coins['coins'][number]

const SearchItem = ({ coin }: { coin: Coin }) => {
  return (
    coin && (
      <NavLink
        to={`/dashboard/single-crypto/${coin.id}`}
        className="w-ful p-2 pl-8 flex items-center justify-start gap-4 bg-[#1e1c36] rounded m-3 hover:bg-[#2a274a]"
      >
        <img src={coin.thumb} alt="crypto-icon" />
        <div className="">
          <p className="font-medium">
            {coin.name}
            {coin.market_cap_rank && (
              <span className="py-0.5 px-1 rounded bg-[#0d0a1b] text-white text-[12px]/[12px] inline-block">
                #{coin.market_cap_rank}
              </span>
            )}
          </p>
          <p className="font-light text-[12px]">{coin.symbol}</p>
        </div>
      </NavLink>
    )
  )
}

export const SearchList = ({ searchData }: { searchData: SearchData | undefined }) => {
  const { coins } = searchData as SearchData

  return (
    <div className="bg-[#0d0a1b] border border-solid border-[#272133] w-full absolute top-[100%] left-0 rounded-2xl py-2 px-0.5">
      <div className="max-h-[350px] overflow-y-scroll">
        {coins.length === 0 && <div className="text-center font-bold">There are no such coins. Try another</div>}
        {coins.map((coin: Coin) => (
          <SearchItem key={coin && coin.id} coin={coin} />
        ))}
      </div>
    </div>
  )
}

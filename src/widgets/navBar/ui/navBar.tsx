import { NavLink } from 'react-router-dom'

import dashboardIconActive from '/dashboard.svg'
import dashboardIcon from '/dashboard-white.svg'
import userIconActive from '/user.svg'
import userIcon from '/user-white.svg'
import newsIconActive from '/news.svg'
import newsIcon from '/news-white.svg'
import cryptoIconActive from '/crypto.svg'
import cryptoIcon from '/crypto-white.svg'

type LinkProps = {
  path: string
  activeIcon: string
  nonActiveIcon: string
}

const links: LinkProps[] = [
  { path: 'main', activeIcon: dashboardIconActive, nonActiveIcon: dashboardIcon },
  { path: 'single-crypto', activeIcon: cryptoIconActive, nonActiveIcon: cryptoIcon },
  { path: 'news', activeIcon: newsIconActive, nonActiveIcon: newsIcon },
  { path: 'user', activeIcon: userIconActive, nonActiveIcon: userIcon },
]

const NavBarLink = ({ path, activeIcon, nonActiveIcon }: LinkProps) => {
  return (
    <NavLink to={`/dashboard/${path}`} className={({ isActive }) => (isActive ? 'p-1.5 rounded-md bg-white' : 'p-1.5')}>
      {({ isActive }) => <img src={isActive ? activeIcon : nonActiveIcon} className="w-[24px] h-[24px]" alt={path} />}
    </NavLink>
  )
}

export const NavBar = () => {
  return (
    <nav className="h-full  flex flex-col justify-center gap-12">
      {links.map((link: LinkProps, index) => (
        <NavBarLink key={index} path={link.path} activeIcon={link.activeIcon} nonActiveIcon={link.nonActiveIcon} />
      ))}
    </nav>
  )
}

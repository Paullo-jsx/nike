import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Header Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items) => (
            <li key={items.label}>
              <a href={items.href} className='font-montserrat leading-5 text-lg text-slate-gray'>
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img src={hamburger} alt=""
            className='hidden max-lg:block'
            width={30}
            height={35}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
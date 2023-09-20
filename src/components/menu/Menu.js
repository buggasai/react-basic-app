import React from 'react'
import Link from "next/link";

export function Menu() {
  return (
    <div className='navbar container-fluid flex justify-content-center'>
      <div className='navbar-inner'>
        <ul className='nav flex-column'>
              <li className={`me-3 nav-item p-2 liClass`}><Link href='/home'>Home</Link> </li>
              <li className={`me-3 nav-item  liClass p-2`}><Link href='/about'>About</Link></li>
              <li className={`me-3 nav-item liClass p-2`}><Link href='/contact'>Contact Us</Link></li>
              <li className={`me-3 nav-item liClass p-2`}><Link href='/redux'>Redux</Link></li>
          </ul>
      </div>
    </div>
  )
}

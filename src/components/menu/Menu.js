import React from 'react'
import Link from "next/link";

export function Menu() {
  return (
    <div className='navbar container-fluid flex justify-content-center'>
      <div className='navbar-inner'>
        <ul className='nav flex-column'>
              <li className={`btn btn-danger`}><Link className='text-white' href='/home'>Home</Link> </li>
              <li className={`mt-3 btn btn-danger`}><Link className='text-white' href='/about'>About</Link></li>
              <li className={`mt-3 btn btn-danger`}><Link className='text-white' href='/contact'>Contact Us</Link></li>
              <li className={`mt-3 btn btn-danger`}><Link className='text-white' href='/redux'>Redux</Link></li>
          </ul>
      </div>
    </div>
  )
}

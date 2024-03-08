import profile from '../public/assets/profile.jpg'
import Image from 'next/image'
import Button from './ui/Button'
import './../style/style.css'
import Link from 'next/link'

export default function Header () {

  return (
    <div className="bg-orange-100 h-10 sm:h-11 md:h-12 lg:h-12 shadow-md flex justify-between items-center p-3">
      <h1 className='text-lg md:text-xl lg:text-2xl ml-5 app_title'>Tomosell</h1>

      <div className='relative dropdown_account_opener'>
        <Image 
          className='rounded-full mr-3 cursor-pointer'
          src={profile}
          width={40}
          alt='user Loged-in'
          />

        <div className='dropdown_account_menu p-1.5 -ml-28 md:-ml-36 w-40 md:w-48 bg-orange-50 rounded-lg gap-2'>
          <Link className='p-2 rounded hover:bg-orange-100 cursor-pointer block text-sm md:text-base' href='/account'>My Account</Link>
          <Link className='p-2 rounded hover:bg-orange-100 cursor-pointer block text-sm md:text-base' href='/account'>Favorite</Link>
          <Button className='mt-4 mb-1.5 mx-3 md:mx-5 bg-white w-4/5 text-sm md:text-base' type='secondary'>Sign Out</Button>
        </div>
      </div>

      {/* <Button className='text-xs sm:text-xs md:text-sm lg:text-sm mr-3' type='primary'><Link href='/signin'>SignUp / SignIn</Link></Button> */}
    </div>
  )
}
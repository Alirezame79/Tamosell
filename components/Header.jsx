import profile from '../public/assets/profile.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Button from './ui/Button'
import './../style/style.css'

export default function Header () {

  return (
    <div className="bg-orange-100 h-12 shadow-md flex justify-between items-center p-3">
      <h1 className='text-2xl ml-5 app_title'>Tamosell</h1>

      {/* <Image 
        className='rounded-full mr-3'
        src={profile}
        width={40}
        alt='user Loged-in'
        /> */}

      <Button type='primary'>SignUp / SignIn</Button>
    </div>
  )
}
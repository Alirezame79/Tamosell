'use client';
import Image from "next/image"
import profile from '../../public/assets/profile.jpg'
import Button from "@/components/ui/Button"
import Link from "next/link"
import './../../style/style.css'
import { redirect, useRouter } from "next/navigation"

export default function Account() {
  const router = useRouter();

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="bg-white min-w-32 md:min-w-96 shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center gap-10">
        <div>
          <Image 
            className="rounded-full"
            src={profile}
            width={90}
            height={90}
            alt="profile default image"
            />
          <h2 className="text-xl md:text-2xl text-center mt-3">Name</h2>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-xs md:text-sm">Email</label>
          <h2 className="font-bold text-lg md:text-xl">email@gmail.com</h2>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-xs md:text-sm">Phone</label>
          <h2 className="font-bold text-lg md:text-xl">09112345678</h2>
        </div>
        <div className="flex justify-between w-full gap-4">
          <Button className='text-xs md:text-sm w-2/3' onClick={() => {router.push('/edit/account')}} type='primary'>Edit Phone</Button>
          <Button className='text-xs md:text-sm w-1/3' onClick={() => {router.push('/')}} type='secondary'>Home</Button>
        </div>
      </div>
    </div>
  )
}
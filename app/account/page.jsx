'use client';
import Image from "next/image"
import profile from '../../public/assets/profile.jpg'
import Button from "@/components/ui/Button"
import Link from "next/link"
import './../../style/style.css'
import { redirect, useRouter } from "next/navigation"
import axios from "axios";
import BASE_URL from "@/public/api/BaseUrl";
import { useEffect, useState } from "react";

export default function Account() {
  const router = useRouter();
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setLoading(true)
    const fetchRequest = async () => {
      try {
        const response = await axios.get(BASE_URL + "account/", {
          headers: {
            "Content-Type": "application/json",
          }
        })
        setAccount(response.data)
      } catch (error) {
        if (error.code === "ERR_BAD_REQUEST") {
          toast.error("")
        }
      }
      setLoading(false)
    }

    fetchRequest();
  }, [])

  return (
    <div className="min-h-screen">
      {loading ? <p className='m-5 text-xl font-bold text-center'>Loading...</p> :
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
            <h2 className="text-xl md:text-2xl text-center mt-3">{account.Username}</h2>
          </div>
          <div className="flex flex-col items-center">
            <label className="text-xs md:text-sm">Email</label>
            <h2 className="font-bold text-lg md:text-xl">{account.Email}</h2>
          </div>
          <div className="flex flex-col items-center">
            <label className="text-xs md:text-sm">Phone</label>
            <h2 className="font-bold text-lg md:text-xl">{account.Phone}</h2>
          </div>
          <div className="flex justify-between w-full gap-4">
            <Button className='text-xs py-2 md:text-sm w-2/3' onClick={() => {router.push('/edit/account')}} type='primary'>Edit Phone</Button>
            <Button className='text-xs py-2 md:text-sm w-1/3' onClick={() => {router.push('/')}} type='secondary'>Home</Button>
          </div>
        </div>
      </div>}
    </div>
  )
}
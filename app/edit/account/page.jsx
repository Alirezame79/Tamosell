'use client'
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import BASE_URL from "@/public/api/BaseUrl";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EditAccount() {
  const router = useRouter();
  const changePhoneRef = useRef();
  const [changePhoneAlert, setChangePhoneAlert] = useState(false);

  async function phoneChangeClicked(event) {
    event.preventDefault();
    if (changePhoneRef.current.value === "") {
      setChangePhoneAlert(true)
      return
    }

    try {
      const response = await axios.post(BASE_URL + "change-phone/", {
        newPhone: changePhoneRef.current.value,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      if (response.status === 200) {
        console.log("accept new phone")
        router.push("/account")
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    }
  }

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24">
      <Toaster />
      <form className="bg-white min-w-32 md:min-w-80 shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center gap-10">
        <div className="mt-2">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Enter Your New Phone Number
          </label>
          <Input id='email' innerRef={changePhoneRef} onChange={()=> {setChangePhoneAlert(false)}} type='tel' />
          {changePhoneAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        <div className="flex gap-3 w-full">
          <Button className='w-2/3 self-center py-2 lg:text-base text-xs md:text-sm' onClick={phoneChangeClicked} type='primary'>Submit</Button>
          <Button className='w-1/3 self-center py-2 lg:text-base text-xs md:text-sm' onClick={() => {router.push('/account')}} type='secondary'>Cancel</Button>
        </div>
      </form>
    </div>
  )
}
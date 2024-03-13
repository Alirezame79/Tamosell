'use client'
import { useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import BASE_URL from "@/public/api/BaseUrl";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import './../../style/style.css';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn () {
  const username = useRef();
  const password = useRef();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function signInClicked(event) {
    event.preventDefault();
    setLoading(true)

    getToken()
  }

  const getToken = async () => {
    try {
      const tokenResponse = await axios.post(BASE_URL + "login/", {
        username: username.current.value,
        password: password.current.value
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(tokenResponse)

      if (tokenResponse.status === 200) {
        localStorage.setItem("token", tokenResponse.data.access);
        getProfile()
      }
    } catch (error) {
      console.log(error)
      toast.error("Something wrong happened!")
      setLoading(false)
    }
  }

  const getProfile = async () => {
    try {
      const profileResponse = await axios.get(BASE_URL + "initialize/", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': "Bearer " + localStorage.getItem('token'),
        }
      })
      console.log(profileResponse)
      if (profileResponse.status === 200) {
        toast.success('SignedIn seccessfuly!')
        router.push('/')
      }

    } catch (error) {
      console.log(error)
      toast.error("Something wrong happened!")
      setLoading(false)
    }
  }

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24 ">
      <Toaster />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <div className="mb-6">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input id='email' innerRef={username} type='text' />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Input id='password' innerRef={password} type='password' />
        </div>
        { loading && <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' type='loading'>Loading...</Button> }
        { !loading && <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' onClick={signInClicked} type='primary'>Sign In</Button> }
        <p className="-mb-5 self-center text-orange-900 hover:text-orange-700 underline text-xs lg:text-sm"><Link href='/signup'>I don't have any account yet</Link></p>
      </form>
    </div>
  )
}
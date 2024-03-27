'use client'
import { useRef, useState, useContext } from "react";
import ProfileContext from "@/context/profileContext";
import Link from "next/link";
import axios from "axios";
import BASE_URL from "@/public/api/BaseUrl";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import './../../style/style.css';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn () {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {setAuthentication} = useContext(ProfileContext);
  const [usernameAlert, setUsernameAlert] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState(false)

  async function signInClicked(event) {
    event.preventDefault();

    if (usernameRef.current.value === "") {
      setUsernameAlert(true)
      return
    }
    if (passwordRef.current.value === "") {
      setPasswordAlert(true)
      return
    }

    setLoading(true)
    fetchRequest()
  }

  const fetchRequest = async () => {
    try {
      const response = await axios.post(BASE_URL + "sign-in/", {
        Username: usernameRef.current.value,
        Password: passwordRef.current.value
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(response)

      if (response.status === 200) {
        setAuthentication(1);
        localStorage.setItem("authentication", 1);
        console.log("Granted")
        router.push("/")
      }
    } catch (error) {
      console.log(error)
      if (error.code === "ERR_BAD_REQUEST") {
        toast.error("Wrong Username Or Password")
      }
    }
    setLoading(false)
  }

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24 ">
      <Toaster />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <div className="mb-6">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input id='email' onChange={()=> {setUsernameAlert(false)}} innerRef={usernameRef} type='text' />
          {usernameAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Input id='password' onChange={()=> {setPasswordAlert(false)}} innerRef={passwordRef} type='password' />
          {passwordAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        { loading && <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' type='loading'>Loading...</Button> }
        { !loading && <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' onClick={signInClicked} type='primary'>Sign In</Button> }
        <p className="-mb-5 self-center text-orange-900 hover:text-orange-700 underline text-xs lg:text-sm"><Link href='/signup'>I don't have any account yet</Link></p>
      </form>
    </div>
  )
}
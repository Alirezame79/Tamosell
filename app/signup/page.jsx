'use client'
import Link from "next/link";
import Button from "../../components/ui/Button";
import Input from "@/components/ui/Input";
import './../../style/style.css';
import { useContext, useRef, useState } from "react";
import axios from "axios";
import BASE_URL from "@/public/api/BaseUrl";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ProfileContext } from "@/context/profileContext";

export default function SignUp () {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {setAuthentication} = useContext(ProfileContext);
  const [usernameAlert, setUsernameAlert] = useState(false)
  const [emailAlert, setEmailAlert] = useState(false)
  const [phoneAlert, setPhoneAlert] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState(false)
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState(false)
  const [passwordsNotMatched, setPasswordsNotMatched] = useState(false)

  function passwordsOnBlur() {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setPasswordsNotMatched(true)
    }
  }

  function signUpClicked(event) {
    event.preventDefault();

    if (usernameRef.current.value === "") {
      setUsernameAlert(true)
      return
    }
    if (emailRef.current.value === "") {
      setEmailAlert(true)
      return
    }
    if (phoneRef.current.value === "") {
      setPhoneAlert(true)
      return
    }
    if (passwordRef.current.value === "") {
      setPasswordAlert(true)
      return
    }
    if (confirmPasswordRef.current.value === "") {
      setConfirmPasswordAlert(true)
      return
    }

    setLoading(true)
    fetchRequest()
  }

  const fetchRequest = async () => {
    try {
      const tokenResponse = await axios.post(BASE_URL + "sign-up/", {
        Username: usernameRef.current.value,
        Email: emailRef.current.value,
        Phone: phoneRef.current.value,
        Password: passwordRef.current.value,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(tokenResponse)

      if (tokenResponse.status === 200) {
        setAuthentication(1);
        localStorage.setItem("authentication", 1);
        console.log("Granted")
        router.push("/")
      }
    } catch (error) {
      console.log(error)
      if (error.code === "ERR_BAD_REQUEST") {
        toast.error("This Username already exists!")
      }
    }
    setLoading(false)
  }

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24 ">
      <Toaster />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="username">
            Username
          </label>
          <Input id='username' onChange={()=> {setUsernameAlert(false)}} type='text' innerRef={usernameRef} />
          {usernameAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input id='email' onChange={()=> {setEmailAlert(false)}} type='email' innerRef={emailRef} />
          {emailAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <Input id='phone' onChange={()=> {setPhoneAlert(false)}} type='tel' innerRef={phoneRef} />
          {phoneAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Input id='password' onChange={()=> {
            setPasswordAlert(false)
            setPasswordsNotMatched(false)}} type='password' innerRef={passwordRef} onBlur={passwordsOnBlur} />
          {passwordAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Input id='confirmPassword' onChange={()=> {
            setConfirmPasswordAlert(false) 
            setPasswordsNotMatched(false)}} type='password' innerRef={confirmPasswordRef} onBlur={passwordsOnBlur} />
          {confirmPasswordAlert && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">This Field can't be empty</p>}
          {passwordsNotMatched && <p className="text-red-600 p-0.5 text-xs md:text-sm italic">Passwords are NOT Matched</p>}
        </div>
        { loading && <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' type='loading'>Loading...</Button> }
        { !loading && <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' onClick={signUpClicked} type='primary'>Sign Up</Button> }
        <p className="-mb-5 self-center text-orange-900 hover:text-orange-700 underline text-xs lg:text-sm"><Link href='/signin'>I already have an account</Link></p>
      </form>
    </div>
  )
}
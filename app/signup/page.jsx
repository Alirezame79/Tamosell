'use client'
import Link from "next/link";
import Button from "../../components/ui/Button";
import Input from "@/components/ui/Input";
import './../../style/style.css';
import { useEffect, useRef } from "react";

export default function SignUp () {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  function confirmPasswordOnBlur() {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log('Passwords are not matched')
    }
  }

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24 ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <Input id='name' type='text' innerRef={nameRef} />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input id='email' type='email' innerRef={emailRef} />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <Input id='phone' type='tel' innerRef={phoneRef} />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Input id='password' type='password' innerRef={passwordRef} />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Input id='confirmPassword' type='password' innerRef={confirmPasswordRef} onBlur={confirmPasswordOnBlur} />
        </div>
        <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' type='primary'>Sign Up</Button>
        <p className="-mb-5 self-center text-orange-900 hover:text-orange-700 underline text-xs lg:text-sm"><Link href='/signin'>I already have an account</Link></p>
      </form>
    </div>
  )
}
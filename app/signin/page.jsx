import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import './../../style/style.css';

export default function SignIn () {

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24 ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <div className="mb-6">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input id='email' type='text' />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Input id='password' type='password' />
        </div>
        <Button className='m-5 lg:w-4/5 w-3/5 self-center lg:text-base text-sm' type='primary'>Sign In</Button>
        <p className="-mb-5 self-center text-orange-900 hover:text-orange-700 underline text-xs lg:text-sm"><Link href='/signup'>I don't have any account yet</Link></p>
      </div>
    </div>
  )
}
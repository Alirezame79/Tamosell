'use client'
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";

export default function EditAccount() {
  const router = useRouter();

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24">
      <form className="bg-white min-w-32 md:min-w-80 shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center gap-10">
        <div className="mt-2">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="email">
            Enter Your New Phone Number
          </label>
          <Input id='email' type='tel' />
        </div>
        <div className="flex gap-3 w-full">
          <Button className='w-2/3 self-center lg:text-base text-xs md:text-sm' type='primary'>Submit</Button>
          <Button className='w-1/3 self-center lg:text-base text-xs md:text-sm' onClick={() => {router.push('/account')}} type='secondary'>Cancel</Button>
        </div>
      </form>
    </div>
  )
}
'use client'
import { useParams } from "next/navigation"
import defaultProduct from './../../../public/assets/product-default.png'
import Image from "next/image";
import Button from "@/components/ui/Button";
import '../../../style/style.css';

export default function productId() {
  const { productid } = useParams();

  if (window.innerWidth <= 750) {                   // Mobile Mode
    return (
      <div className="min-h-full flex flex-col gap-5 my-5 mx-10 p-5 justify-between bg-orange-300 rounded-lg">
        <Image
          className="w-3/4 bg-orange-100 self-center rounded-lg p-10"
          src={defaultProduct}
          alt="product image"
          />
        <h2 className="text-2xl font-bold text-center">Product Name</h2>
        <h3 className="text-xl text-center">Price</h3>
        <h3 className="text-sm bg-orange-400 p-1 rounded-lg self-center text-center">Tag</h3>
        <h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo perspiciatis quidem excepturi possimus sunt fugiat natus incidunt officia dolorum eligendi iusto, ullam voluptatum quibusdam quia magni aut autem ut quam numquam reiciendis! Sint sit atque ut impedit, in dolore quisquam minima est quibusdam, cupiditate cumque labore ab ex illum?</h3>
        
        <div className="flex w-full bg-orange-500 p-1 rounded-lg items-center">
          <Button className='flex self-center justify-center w-1/4 bg-orange-500 hover:bg-orange-500 font-normal text-xl' type='primary'>
            <img width="20" height="20" src="https://img.icons8.com/forma-thin-filled/24/flag.png" alt="flag"/>
          </Button> |
          <Button className='flex self-center justify-center w-1/4 bg-orange-500 hover:bg-orange-500 font-normal text-xl' type='primary'>
            <img width="20" height="20" src="https://img.icons8.com/material-sharp/24/facebook-like--v1.png" alt="like"/>
          </Button> |
          <Button className='flex self-center justify-center w-2/4 bg-orange-500 hover:bg-orange-500 font-normal text-xl' type='primary'>
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone"/>
          </Button>
        </div>
      </div>
    )
  } else {                                          // Desktop Mode
    return (
      <div className="min-h-full flex flex-col gap-10 my-20 mx-40 p-10 justify-between bg-orange-200 rounded-lg">
        <div className="flex">
          <Image
            className="w-2/5 bg-orange-100 rounded-lg"
            src={defaultProduct}
            alt="product image"
            />
          <div className="flex flex-col w-3/5 gap-5 px-20 py-10">
            <h2 className="text-4xl font-bold">Product Name</h2>
            <h3 className="text-2xl">Price</h3>
            <h3 className="text-base bg-orange-300 p-1 rounded-lg self-start">Tag</h3>
            <h3 className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo perspiciatis quidem excepturi possimus sunt fugiat natus incidunt officia dolorum eligendi iusto, ullam voluptatum quibusdam quia magni aut autem ut quam numquam reiciendis! Sint sit atque ut impedit, in dolore quisquam minima est quibusdam, cupiditate cumque labore ab ex illum?</h3>
          </div>
        </div>
        <div className="flex w-full bg-orange-500 p-1 rounded-lg items-center">
          <Button className='flex self-center justify-center w-1/4 bg-orange-500 hover:bg-orange-500 font-normal text-xl' type='primary'>
            <img width="24" height="24" src="https://img.icons8.com/forma-thin-filled/24/flag.png" alt="flag"/>
          </Button> |
          <Button className='flex self-center justify-center w-1/4 bg-orange-500 hover:bg-orange-500 font-normal text-xl' type='primary'>
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/facebook-like--v1.png" alt="like"/>
          </Button> |
          <Button className='flex self-center justify-center w-2/4 bg-orange-500 hover:bg-orange-500 font-normal text-xl' type='primary'>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone"/>
          </Button>
        </div>
      </div>
    )
  }
}
import Image from "next/image"
import defaultProduct from './../../public/assets/product-default.png'

export default function ProductCard() {

  return (
    <div className="bg-orange-200 flex gap-3 p-3 m-3 h-24 md:h-28 lg:h-32 rounded cursor-pointer">
      <Image 
        className="bg-orange-50 h-full rounded"
        src={defaultProduct}
        width={100}
        height={88}
        alt="product image"
      />

      <div className="flex flex-col justify-between p-2 bg-orange-50 rounded w-full">
        <h2 className="text-sm md:text-base lg:text-lg font-bold p-1">Product Name</h2>
        <div className="flex justify-between text-xs md:text-sm lg:text-base p-1">
          <h3>Price</h3>
          <h3 className="mr-3 bg-orange-300 p-1 rounded-lg">Tag</h3>
        </div>
      </div>
    </div>
  )
}
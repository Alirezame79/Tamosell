'use client'
import { useParams } from "next/navigation"
import defaultProduct from './../../../public/assets/product-default.png'
import Image from "next/image";
import Button from "@/components/ui/Button";
import '../../../style/style.css';
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "@/public/api/BaseUrl";
import Book from "@/components/detailModel/Book";
import Electronic from "@/components/detailModel/Electronic";
import Writing from "@/components/detailModel/Writing";
import Car from "@/components/detailModel/Car";
import './../../../style/style.css'

export default function productId() {
  const { productid } = useParams();
  const [product, setProduct] = useState({})
  const [detalil, setDetail] = useState({})
  const [showDetail, setShowDetail] = useState(false)

  function currencyFormat(num) {
    return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  useEffect(()=> {
    async function fetchRequest() {
      try {
        const response = await axios.post(BASE_URL + "product/", {
          productId: productid
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
        console.log(response)
  
        if (response.status === 200) {
          console.log("received")
          setProduct(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchRequest();
  }, [])

  async function productDetailClicked() {
    try {
      const response = await axios.post(BASE_URL + "product-detail/", {
        productId: productid
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(response)

      if (response.status === 200) {
        console.log("received")
        setDetail(response.data)
        setShowDetail(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (window.innerWidth <= 750) {                   // Mobile Mode
    return (
      <div className="min-h-min flex flex-col gap-5 my-5 mx-10 p-5 justify-between bg-orange-300 rounded-lg">
        <img
          className="w-full bg-orange-100 rounded-lg object-cover"
          src={product.ImageUrl}
          alt="product image"
          onError={event => {
            event.target.src = "https://icons.veryicon.com/png/o/application/applet-1/product-17.png"
            event.onerror = null
          }}/>
        <h2 className="text-2xl font-bold text-center">{product.Title}</h2>
        {product.Price !== undefined && <h3 className="text-xl text-center">{currencyFormat(product.Price)}</h3>}
        <h3 className="text-sm bg-orange-400 p-1 rounded-lg self-center text-center">{product.Tag}</h3>
        {showDetail && product.Tag === "Book" && <Book param={detalil} /> }
        {showDetail && product.Tag === "Electronic" && <Electronic param={detalil} />}
        {showDetail && product.Tag === "Writing" && <Writing param={detalil} />}
        {showDetail && product.Tag === "Car" && <Car param={detalil} />}
        {!showDetail && <h3 className="text-sm text-blue-700 hover:text-blue-500 cursor-pointer" onClick={productDetailClicked}>Show more ...</h3>}
        {showDetail && <h3 className="text-sm text-blue-700 hover:text-blue-500 cursor-pointer" onClick={()=> {setShowDetail(false)}}>Show less ...</h3>}
          
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
          <img
            className="w-3/5 max_height bg-orange-100 rounded-lg object-cover"
            src={product.ImageUrl}
            alt="product image"
            onError={event => {
              event.target.src = "https://icons.veryicon.com/png/o/application/applet-1/product-17.png"
              event.onerror = null
            }}/>
          <div className="flex flex-col w-3/5 gap-5 px-20 py-10">
            <h2 className="text-4xl font-bold">{product.Title}</h2>
            {product.Price !== undefined && <h3 className="text-2xl">{currencyFormat(product.Price)}</h3>}
            <h3 className="text-base bg-orange-300 p-1 rounded-lg self-start">{product.Tag}</h3>
            {showDetail && product.Tag === "Book" && <Book param={detalil} /> }
            {showDetail && product.Tag === "Electronic" && <Electronic param={detalil} />}
            {showDetail && product.Tag === "Writing" && <Writing param={detalil} />}
            {showDetail && product.Tag === "Car" && <Car param={detalil} />}
            {!showDetail && <h3 className="text-sm text-blue-700 hover:text-blue-500 cursor-pointer" onClick={productDetailClicked}>Show more ...</h3>}
            {showDetail && <h3 className="text-sm text-blue-700 hover:text-blue-500 cursor-pointer" onClick={()=> {setShowDetail(false)}}>Show less ...</h3>}
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
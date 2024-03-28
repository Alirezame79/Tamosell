'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import defaultProductImage from '../../public/assets/product-default.png'
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import axios from "axios";
import BASE_URL from "@/public/api/BaseUrl";

export default function addProduct() {
  const [file, setFile] = useState(null);
  const [showImage, setShowImage] = useState(defaultProductImage);
  const [selectedTag, setselectedTag] = useState('book');
  const titleRef = useRef()
  const priceRef = useRef()
  const [percent, setPercent] = useState(0);

  function setImage(e) {
    if (e.target.files.length > 0) {
      console.log(e.target.files);
      const x = URL.createObjectURL(e.target.files[0]);
      console.log(x);
      console.log(e.target.files[0]);
      if (x !== null) {
        setShowImage(x);
        setFile(e.target.files[0]);
      }
    }
  }

  async function submitClicked(e) {
    e.preventDefault();

    let formData = new FormData()

    formData.append("file", file)
    formData.append("title", titleRef.current.value)
    formData.append("price", priceRef.current.value)

    try {
      const response = await axios.post(BASE_URL + "add-product/", 
      formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress
      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const onUploadProgress = (progressEvent) => {
    const { loaded, total } = progressEvent;
    let p = Math.floor((loaded * 100) / total);
    setPercent(p)
    if (percent < 100) {
      console.log(`${loaded} bytes of ${total} bytes. ${p}%`);
    }
  };

  return (
    <div className="enter_page_animation min-h-screen flex flex-col items-center justify-between mt-5 p-8 sm:p-12 md:p-16 lg:p-24">
      <form className="bg-white w-3/4 md:w-1/2 min-w-32 md:min-w-80 shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center gap-5">
        {percent}
        <div className="flex flex-col items-center gap-2 relative mb-5">
          <Image src={showImage} width={256} height={256} alt="product image" className="bg-orange-100 rounded-lg w-64 object-contain"/>
          <div className="absolute right-2 bottom-2 flex flex-col items-center">
            <label className="rounded-full bg-orange-400 text-center w-7 cursor-pointer text-xl opacity-75" htmlFor="upload-image">+</label>
            <input onChange={setImage} id="upload-image" type="file" accept="image/*" className=" w-1 opacity-0 -z-1 absolute" />
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="title">
            Title
          </label>
          <Input innerRef={titleRef} id='title' type='text'/>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="price">
            Price
          </label>
          <Input innerRef={priceRef} id='price' type='number'/>
        </div>
        <div className="mb-5 w-3/4 md:w-64">
          <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="tag">
            Tag
          </label>
          <select value={selectedTag} onChange={(e) => {setselectedTag(e.target.value)}} className="text-xs md:text-sm lg:text-base shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-200 focus:shadow-outline " id="tag" name="tags">
            <option value="book">Book</option>
            <option value="eDevice">Electronic Device</option>
            <option value="car">Car</option>
          </select>
        </div>

        {selectedTag === 'book' &&                          // Book
        <>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <Input id='name' type='text'/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="author">
              Author
            </label>
            <Input id='author' type='text'/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="publisher">
              Publisher
            </label>
            <Input id='publisher' type='text'/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="pages">
              Pages
            </label>
            <Input id='pages' type='number'/>
          </div>
        </>}
        
        {selectedTag === 'eDevice' &&                       // Electronic Device
        <>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <Input id='name' type='text'/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="brand">
              Brand
            </label>
            <Input id='brand' type='text'/>
          </div>
          <div className="mb-5 w-3/4 md:w-64">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="device">
              Device
            </label>
            <select className="text-xs md:text-sm lg:text-base shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-200 focus:shadow-outline " id="device" name="tags">
              <option value="book">Mobile</option>
              <option value="eDevice">Laptop</option>
              <option value="car">PC</option>
              <option value="car">Others</option>
            </select>
          </div>
        </>}

        {selectedTag === 'car' &&                             // Car
        <>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <Input id='name' type='text'/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="brand">
              Brand
            </label>
            <Input id='brand' type='text'/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 lg:text-sm text-xs font-bold mb-2" htmlFor="country">
              Creator Country
            </label>
            <Input id='country' type='text'/>
          </div>
        </>}
        <div className="flex w-full justify-center items-center gap-3 h-10">
          <Button className='w-48 h-full text-xs md:text-sm' type='primary' onClick={submitClicked}>Add Product</Button>
          <Button className='w-28 h-full text-xs md:text-sm' type='secondary'>Cancel</Button>
        </div>
      </form>
    </div>
  )
}
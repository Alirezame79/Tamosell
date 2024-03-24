'use client'
import ProductCard from '@/components/ui/ProductCard';
import './../style/style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import BASE_URL from '@/public/api/BaseUrl';

export default function Home() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(BASE_URL + 'products/');
        setLoading(false)
        if (response.status === 200) {
          setproducts(response.data)
        } else if(response.status === 201) {
          toast.error("Be Careful.")
          setLoading(false)
        }
      } catch (error) {
        setError(true)
        if (error.code === "ERR_NETWORK") {
          toast.error("Network Error!")
        } else {
          toast.error("An error occured! Please refresh the Page.")
        }
        setLoading(false)
      }
    }

    fetchProducts();
  }, [])
  
  return (
    <main>
      <Toaster />
      <div className='text-center'>
        {products.length === 0 && !loading && !error && <p className='m-5 text-base'>No Product Found!</p>}
        {error && !loading && <p className='mt-20 text-base'>An error occured!</p>}
        {loading && <p className='m-5 text-xl font-bold'>Loading...</p>}
      </div>
      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start">
        {products.map((product) => {
          return (
            <ProductCard key={product.ID} attribute={product}/>
          ) 
        })}
      </div>
    </main>
  );
}
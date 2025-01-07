import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/reducer/cartSlice'
const Detail = () => {

  const { slug } = useParams();
  const [detail, setDetail] = useState([])
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length > 0){
      setDetail(findDetail[0]);
    }else{
      window.location.href = '/';
    }
  }, [slug])

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity -1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId : detail.id,
      quantity : quantity,
    }))
  }

  return (
    <div>
    <h2 className='text-2xl text-center md:text-3xl dark:text-white'>PRODUCT DETAIL</h2>
    <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2'>
        <div>
            <img src={detail.image} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col gap-3 px-4 md:gap-5 md:px-0'>
            <h1 className='text-2xl font-bold uppercase md:text-4xl dark:text-white '>{detail.name}</h1>
            <p className='text-2xl font-bold md:text-3xl dark:text-white'>
                ${detail.price}
            </p>
            <div className='flex flex-col gap-3 sm:flex-row md:gap-5'>
                <div className='flex gap-2 justify-center items-center'>
                    <button className='flex justify-center items-center w-10 h-10 text-xl font-bold bg-gray-100 rounded-xl dark:text-white dark:bg-black' onClick={handleMinusQuantity}>-</button>
                    <span className='flex justify-center items-center w-10 h-10 text-xl font-bold bg-gray-200 rounded-xl dark:text-white dark:bg-gray-900'>{quantity}</span>
                    <button className='flex justify-center items-center w-10 h-10 text-xl font-bold bg-gray-100 rounded-xl dark:text-white dark:bg-black' onClick={handlePlusQuantity}>+</button>
                </div>
                <button className='dark:bg-gray-300 dark:text-black px-7 py-3 w-full text-white rounded-xl shadow-2xl bg-slate-900 sm:w-auto' onClick={handleAddToCart}>
                    Add To Cart
                </button>
            </div>
            <p className='text-sm md:text-base dark:text-white'>
                {detail.description}
            </p>
        </div>
    </div>
</div>
  )
}

export default Detail


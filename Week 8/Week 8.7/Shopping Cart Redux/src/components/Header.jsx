import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../store/reducer/cartSlice';
import ThemeToggle from './ThemeToggle';

const Header = () => {

  const [totalQuantity, setTotalQuantity] = useState(0);

  const carts = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  useEffect(()=>{
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  },[carts])

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
}

  return (
    <header className='flex justify-between items-center p-4 mb-5'>
      <Link to='/' className='text-xl font-semibold dark:text-white uppercase'>Home</Link>
      <div className='flex gap-4 items-center'>
        <ThemeToggle />
        <div className='flex relative justify-center items-center mr-7 w-10 h-10 bg-gray-100 rounded-full cursor-pointer' onClick={handleOpenTabCart}>
          <img src={iconCart} alt="" className='w-6' />
          <span className='flex absolute top-2/3 right-1/2 justify-center items-center w-5 h-5 text-sm text-white bg-red-500 rounded-full'>{totalQuantity}</span>
        </div>
      </div>
    </header>
  )
}

export default Header

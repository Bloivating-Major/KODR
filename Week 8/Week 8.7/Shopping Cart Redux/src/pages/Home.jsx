import React, { useEffect } from 'react'
import ProductCart from '../components/ProductCart'
import { useSelector, useDispatch } from 'react-redux'
import { 
  fetchProducts, 
  selectAllProducts, 
  selectProductsError, 
  selectProductsStatus 
} from '../store/reducer/productsSlice'

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className='my-5 text-3xl dark:text-white font-medium'>List Products</h1>
      <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {products.map((product) => 
          <ProductCart key={product.id} data={product} />
        )}
      </div>
    </div>
  )
}

export default Home

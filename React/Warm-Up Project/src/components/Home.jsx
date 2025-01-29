import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import axios from "../utils/axios";

const Home = () => {
    const [products] = useContext(ProductContext); // Default products from context
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1] || ''); // Safely handle undefined

    const [filteredProducts, setFilteredProducts] = useState(null);

    const getProductCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilteredProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (!category || category === 'undefined') {
            // If no category or invalid category, show all products
            setFilteredProducts(products);
        } else {
            // Fetch products for the selected category
            getProductCategory();
        }
    }, [category, products]); // Re-run when category or products change

    return (
        filteredProducts ? (
            <>
                <Nav />
                <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                    {filteredProducts.map((product, index) => (
                        <Link
                            key={index}
                            to={`/details/${product.id}`}
                            className="card p-5 shadow-xl border-2 border-gray-400 rounded w-[18%] h-[30vh] flex justify-center items-center flex-col mr-3 mb-3"
                        >
                            <div
                                className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5"
                                style={{
                                    backgroundImage: `url(${product.image})`,
                                }}
                            ></div>
                            <h1 className="hover:text-blue-300">{product.title}</h1>
                        </Link>
                    ))}
                </div>
            </>
        ) : (
            <Loading />
        )
    );
};

export default Home;

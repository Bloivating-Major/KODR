import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {

  const [product, setProduct] = useState(null)

  const {id} = useParams();

  const getSingleProduct = async ()=>{
    try{
      const {data} = await axios.get(`/products/${id}`);
      setProduct(data);
    }catch(error){
        console.log(error);
    }
  }

  useEffect(()=>{
    getSingleProduct();
  }, [])


  return ( product ? 
    <div className="w-[70%] h-full justify-between m-auto p-[10%] flex">
      <img
        src={product.image}
        alt=""
        className="h-[80%] w-[40%] object-contain "
      />
      <div className="content  w-[50%]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">$ {product.price}</h2>
        <p className="mb-[5%]" >
          {product.description}
        </p>
        <Link className="py-2 px-5 border rounded border-blue-400 text-blue-500 mr-5">Edit</Link>
        <Link className="py-2 px-5 border rounded border-red-400 text-red-500">Delete</Link>
      </div>
    </div> : <Loading/>
  );
};

export default Details;

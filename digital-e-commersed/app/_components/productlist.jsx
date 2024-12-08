'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Products from '../mockData/index'
import ProductListItem from "./productItem";

 const ProductList = () => {

    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        setProductList(Products)
    }, []);
    return (
        <div >
        <h2 className="font-bold text-xl flex justify-between item-center">Features
        <span>
          <Button>View All</Button>
        </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
            {productList.map((product, index)=>{
                return(
                    <ProductListItem product={product} key={index}/>
                )
            })}

        </div>
      </div>
    )
}

export default ProductList;
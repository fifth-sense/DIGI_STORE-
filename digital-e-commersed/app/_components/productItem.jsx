'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import  Image from "next/image";
import { Card } from "@/components/ui/card";

 const ProductListItem = ({product, index}) => {

    return (
        <div>
        <Card className="p-3 ">
         <Image src={product.image} alt={product.name} height={120} width={220}/>
        <div>
            <h2 className="font-bold text-lg"> {product.name}</h2>

            <h2 className="font-bold text-2xl text-yellow-500">${product.price}</h2>
          
        </div>
        <div className="flex justify-content justify-between mt-2">
            <Image src={product.avatar.image} alt={product.avatar.name} width={40} height={10}/>
            <Button>Add to Cart</Button>
        </div>
      </Card>
      </div>
    )
}

export default ProductListItem;
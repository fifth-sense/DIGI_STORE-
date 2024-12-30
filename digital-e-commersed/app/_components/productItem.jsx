'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const ProductListItem = ({ product, index }) => {

    return (
        <div>
            <Card className="p-3" key={index}>
                <Image src={product.image} alt={product.name} height={120} width={400} />
                <div className="mt-3">
                    <h2 className="font-bold text-lg"> {product.name}</h2>
                    <h2 className="font-bold text-2xl text-yellow-500">${product.price}</h2>

                    <div className="md:flex item-center justify-between mt-3">
                        <div className="flex item-center  justify-center gap-2">
                            <Image src={product.avatar.image} alt={product.avatar.name} width={40} height={10} />
                            <h2 className="text-sm mt-2 text-gray-400">{product.avatar.name}</h2>
                        </div>
                        <Button size="sm" className='mt-1'>Add to Cart</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProductListItem;
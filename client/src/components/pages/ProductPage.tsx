import React, {FC, useEffect, useState} from "react";
import ProductDto from "../../models/ProductDto";
import {useParams} from "react-router";
import ProductCard from "../cards/ProductCard";

interface RouteParams {
    [key: string]: string | undefined,
}

const ProductPage: FC = () => {
    const product: ProductDto = {
        id: 111,
        name: "Electric Scooter",
        description: "Best scooter ever",
        price: 6000,
        creationDate: new Date("2019-01-01")
    }

    return <React.Fragment>
        <ProductCard product={product}/>
    </React.Fragment>
}
export default ProductPage
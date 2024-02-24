import React, {FC, useEffect, useState} from "react";
import ProductDto from "../../models/ProductDto";
import {useParams} from "react-router";
import ProductCard from "../cards/ProductCard";
import {productService} from "../../config/start-up-config";

interface RouteParams {
    [key: string]: string | undefined,
}

const ProductPage: FC = () => {
    const [product, setProduct] = useState<ProductDto>();
    const {id} = useParams<RouteParams>();

    useEffect(() => {
            if (id) {
                setProduct(productService.getProductById(+id));
            }
        },
        [id]
    )

    return <React.Fragment>
        <ProductCard product={product}/>
    </React.Fragment>
}
export default ProductPage
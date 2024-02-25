import React, {FC, useEffect, useState} from "react";
import ProductDto from "../../models/ProductDto";
import {useParams} from "react-router";
import {productService} from "../../config/start-up-config";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

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

    return (
        <Card sx={{maxWidth: 400}}>
            <CardMedia
                sx={{height: 250}}
                image="../../static/images/products/default-product.png"
                title="Default product"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {product?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product?.description}
                </Typography>
                <Typography variant="h6">
                    Price: {product?.price}
                </Typography>
            </CardContent>
        </Card>

    );
}
export default ProductPage
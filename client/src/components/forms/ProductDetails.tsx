import React, {FC, useEffect, useState} from "react";
import ProductDto from "../../models/ProductDto";
import {Button, TextField} from "@mui/material";
import {productService} from "../../config/start-up-config";

type Props = {
    product: ProductDto | undefined;
    updateProduct: boolean;
    updateProductSetter: (updateLocalStorage: boolean) => void;
}

const ProductDetails: FC<Props> = (props: Props) => {
    const [name, setName] = useState(props.product?.name);
    const [description, setDescription] = useState(props.product?.description);
    const [price, setPrice] = useState<number | string | undefined>(props.product?.price);
    const [nameError, setNameError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    useEffect(() => {
            setName(props.product?.name);
            setDescription(props.product?.description);
            setPrice(props.product?.price);
        },
        [props]
    )

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setNameError(false);

        if (name === '') {
            setNameError(true);
        }

        setPriceError(false);

        if (price && (price === '' || (+price <= 0))) {
            alert("in set")
            setPriceError(true);
        }

        if (props.product && name && price && +price > 0) {
            productService.updateProduct({
                id: props.product.id,
                name: name,
                description: description,
                price: +price,
                creationDate: props.product.creationDate
            })
            props.updateProductSetter(!props.updateProduct)
        }
    }

    return (
        <React.Fragment>
            <form autoComplete="off" name="product-form" onSubmit={handleSubmit}>
                <img src={require('../../static/images/products/default-product.png')}
                     width="200"
                     height="200"
                     alt="product"
                />
                <br/>
                <br/>
                <TextField
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    sx={{mb: 3}}
                    fullWidth
                    value={name}
                    error={nameError}
                />
                <TextField
                    label="Description"
                    onChange={e => setDescription(e.target.value)}
                    variant="outlined"
                    color="secondary"
                    value={description}
                    fullWidth
                    multiline
                    rows={3}
                    sx={{mb: 3}}
                />
                <TextField
                    label="Price"
                    onChange={e => setPrice(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    sx={{mb: 3}}
                    fullWidth
                    value={price}
                    error={priceError}
                    type={"number"}
                    inputProps={{type: 'number'}}
                />
                <Button variant="outlined" color="secondary" type="submit">Save</Button>
            </form>
        </React.Fragment>
    );
}

export default ProductDetails
import React, {FC, Fragment} from "react";
import ProductDto from "../../models/ProductDto";

type Props = {
    products: ProductDto[]
}

const ProductList: FC<Props> = (props: Props) => {
    return (<Fragment>
        {JSON.stringify(props.products)}
    </Fragment>)
}

export default ProductList
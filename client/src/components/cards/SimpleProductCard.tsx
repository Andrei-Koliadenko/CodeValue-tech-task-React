import React, {FC, Fragment} from "react";
import ProductDto from "../../models/ProductDto";

type Props = {
    product: ProductDto | undefined
}

const SimpleProductCard: FC<Props> = (props: Props) => {
    return (<Fragment>
        {JSON.stringify(props.product)}
    </Fragment>)
}

export default SimpleProductCard
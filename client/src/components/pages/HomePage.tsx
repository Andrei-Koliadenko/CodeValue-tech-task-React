import React, {FC, useEffect, useState} from "react";
import ProductDto from "../../models/ProductDto";
import SplitPane, {Pane} from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import ProductDetails from "../forms/ProductDetails";
import {productService} from "../../config/start-up-config";
import ProductList from "../page-elements/ProductList";


const HomePage: FC = () => {
    const [sizes, setSizes] = useState([150, '10%', 'auto']);
    const [productList, setProductList] = useState(productService.getAllProducts());
    const [currentProductId, setCurrentProductId] = useState(productList[0].id);
    const [localStorageUpdated, setLocalStorageUpdate] = useState(false);

    useEffect(() => {
        setProductList(productService.getAllProducts());
    }, [localStorageUpdated])

    const detailedProductLayout = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const pageLayout = {
        height: '88vh'
    };

    return (
        <div style={{...pageLayout}}>
            <SplitPane
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
                sashRender={(index, active) => active}>
                <Pane minSize={50} maxSize='70%'>
                    <ProductList products={productList} selectedProduct={setCurrentProductId}/>
                </Pane>
                <Pane minSize={50} maxSize='70%'>
                    <div style={{...detailedProductLayout}}>
                        <ProductDetails
                            product={productList.find(product => product.id === currentProductId)}
                            updateProduct={localStorageUpdated}
                            updateProductSetter={setLocalStorageUpdate}
                        />
                    </div>
                </Pane>
            </SplitPane>
        </div>
    )
}

export default HomePage
import React, {FC, useState} from "react";
import ProductDto from "../../models/ProductDto";
import ProductCard from "../cards/ProductCard";
import SplitPane, {Pane} from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';


const HomePage: FC = () => {
    const [sizes, setSizes] = useState([200, '10%', 'auto']);

    const paneLayout = {
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
                    <div style={{...paneLayout, background: '#ddd'}}>
                        pane1
                    </div>
                </Pane>
                <Pane minSize={50} maxSize='70%'>
                    <div style={{...paneLayout, background: '#d5d7d9'}}>
                        pane2
                    </div>
                </Pane>
            </SplitPane>
        </div>
    )
}

export default HomePage
import React, {FC, useState} from "react";
import ProductDto from "../../models/ProductDto";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {IconButton, ListItemButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {productService} from "../../config/start-up-config";

type Props = {
    products: ProductDto[],
    selectedProduct: (productId: number) => void;
    deleteProduct: boolean;
    deleteProductSetter: (updateLocalStorage: boolean) => void;
}

const ProductList: FC<Props> = (props: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        props.selectedProduct(index);
    };

    const handleDeleteProduct = () => {
        productService.deleteProductById(selectedIndex);
        props.deleteProductSetter(!props.deleteProduct);
    };

    return (<div>
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {props.products.map(product => (
                    <div>
                        <ListItemButton
                            key={product.id}
                            alignItems="flex-start"
                            selected={selectedIndex === product.id}
                            onClick={(event) => handleListItemClick(event, product.id)}
                        >
                            <ListItemAvatar>
                                <Avatar alt={product.name} src="static/images/products/default-product.png"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={product.name}
                                secondary={product.description}
                            />
                            <IconButton edge="end" aria-label="delete" onClick={handleDeleteProduct}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemButton>
                        <Divider variant="inset" component="li"/>
                    </div>
                ))}
            </List>
        </div>
    );
}

export default ProductList
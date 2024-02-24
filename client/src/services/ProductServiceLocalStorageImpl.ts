import ProductServiceAbstract from "./ProductServiceAbstract";
import ProductDto from "../models/ProductDto";

const LOCAL_STORAGE_KEY = "products";

export default class ProductServiceLocalStorageImpl implements ProductServiceAbstract {
    createProduct(newProduct: ProductDto): ProductDto {
        const products = this.getAllProductList();
        const lastId: number = products.reduce((accumulator: number, current: ProductDto) => {
            return accumulator > current.id ? accumulator : current.id;
        }, 0);
        newProduct.id = lastId + 1;
        products.push(newProduct);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
        return newProduct;
    }

    getProductById(productId: number): ProductDto | undefined {
        const products = this.getAllProductList();
        return products.find(p => p.id === productId)
    }

    updateProduct(updatedProduct: ProductDto): ProductDto {
        const products = this.getAllProductList();
        const indexToUpdate = products.findIndex(p => p.id === updatedProduct.id);
        products[indexToUpdate] = updatedProduct;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
        return updatedProduct;
    }

    getAllProducts(): ProductDto[] {
        return this.getAllProductList();
    }

    private getAllProductList(): ProductDto[] {
        const products: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (products) {
            return JSON.parse(products);
        }
        return [];
    }
}
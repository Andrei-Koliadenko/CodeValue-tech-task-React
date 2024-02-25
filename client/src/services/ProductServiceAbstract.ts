import ProductDto from "../models/ProductDto";

export default interface ProductServiceAbstract {
    createProduct(newProduct: ProductDto): ProductDto;

    updateProduct(updatedProduct: ProductDto): ProductDto;

    getProductById(productId: number): ProductDto | undefined;

    deleteProductById(productId: number): void;
}
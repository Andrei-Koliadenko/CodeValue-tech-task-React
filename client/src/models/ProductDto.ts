interface ProductDto {
    id: number;
    name: string;
    description?: string;
    price: number;
    creationDate: Date;
}

export default ProductDto
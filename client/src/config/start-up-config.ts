import ProductServiceLocalStorageImpl from "../services/ProductServiceLocalStorageImpl";
import ProductDto from "../models/ProductDto";

export const productService = new ProductServiceLocalStorageImpl();

export const initialProductList: ProductDto[] = [
    {
        id: 1,
        name: "Electric scooter",
        description: "Best scooter ever",
        price: 6000,
        creationDate: new Date("2019-01-01")
    },
    {
        id: 2,
        name: "Electric bicycle",
        description: "Mediocre bicycle",
        price: 4000,
        creationDate: new Date("2021-05-01")
    },
    {
        id: 3,
        name: "Bicycle",
        price: 500,
        creationDate: new Date("2023-01-10")
    }
]
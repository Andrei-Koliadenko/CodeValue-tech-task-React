import ProductServiceLocalStorageImpl from "../services/ProductServiceLocalStorageImpl";
import ProductDto from "../models/ProductDto";

export const productService = new ProductServiceLocalStorageImpl();

export const initialProductList: ProductDto[] = [
    {
        id: 1,
        name: "Electric scooter",
        description: "Electric scooter, the powerful model with a travel range of up to 60 km",
        price: 6000,
        creationDate: new Date("2019-01-01")
    },
    {
        id: 2,
        name: "Electric bicycle",
        description: "Electric bicycle with 3 mini-balloon tires, front shock absorber and a high-quality  LCD screen",
        price: 4000,
        creationDate: new Date("2021-05-01")
    },
    {
        id: 3,
        name: "Bicycle",
        description: "Classic city bike with comfortable saddle, wide and high handlebar",
        price: 500,
        creationDate: new Date("2023-01-10")
    },
    {
        id: 4,
        name: "Skateboard",
        description: "Professional stunt board made of 100% Canadian maple",
        price: 300,
        creationDate: new Date("2017-04-06")
    },
    {
        id: 5,
        name: "Unicycle",
        description: "Powerful electric unicycle with a 3000Wh battery",
        price: 8000,
        creationDate: new Date("2023-09-11")
    },
    {
        id: 6,
        name: "Road helmet",
        description: "Upgrade and advance to a new road helmet with a flowing and smooth silhouette",
        price: 150,
        creationDate: new Date("2017-04-06")
    },
    {
        id: 7,
        name: "Handlebar bag",
        description: "Handlebar bag for an electric scooter for carrying equipment of the riding",
        price: 100,
        creationDate: new Date("2017-04-08")
    },
    {
        id: 8,
        name: "Cable lock",
        description: "Flexible cable lock with a combination of 4 numbers",
        price: 120,
        creationDate: new Date("2017-04-09")
    }
]
type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}





const productsArray: Product[] = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"Phone",
        capacity:64,
        price:500,
        image:"/images/gold.jpg",
    },
    {
        id:2,
        name:"iPhone 3 Pro",
        description:"This is iPhone 13 Pro",
        type:"Phone",
        capacity:128,
        price:1000,
        image:"/images/red.jpg",
    },
    {
        id:3,
        name:"iPhone XS",
        description:"This is iPhone XS",
        type:"Phone",
        capacity:512,
        price:800,
        image:"/images/black.jpg",
    },
    {
        id:4,
        name:"iPhone 14 Pro MAX",
        description:"This is iPhone 14 Pro MAX",
        type:"Phone",
        capacity:256,
        price:2000,
        image:"/images/green.jpg",
    },
    {
        id:5,
        name:"iPhone 8 Plus",
        description:"This is iPhone 8 Plus",
        type:"Phone",
        capacity:64,
        price:500,
        image:"/images/purple.jpg",
    },
    {
        id:6,
        name:"iPhone 12",
        description:"This is iPhone 12",
        type:"Phone",
        capacity:128,
        price:700,
        image:"/images/blue.jpg",
    }
]

export default productsArray
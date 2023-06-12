const products = [
    {
        id: "1", name: "Pelota Adidas AL RIHLA", price: 100, category: "Mundiales", img:"/images/pelota.png" , stock: 5, description: "Mundial Qatar 2022"
    },
    {
        id: "2", name: "Pelota Adidas TELSTAR", price: 100, category: "Mundiales", img: "/images/Telstar18.jpg", stock: 5, description: "Mundial Rusia 2018"
    },
    {
        id: "3", name: "Pelota Nike FLIGHT CSF 23", price: 100, category: "Copa Libertadores", img: "/images/Libertadores23.jpeg", stock: 5, description: "Copa Libertadores 23 Match"
    },
    {
        id: "4", name: "Pelota Nike FLIGHT CSF 22", price: 100, category: "Copa Libertadores", img: "/images/Libertadores22.jpg", stock: 5, description: "Copa Libertadores 22 Match"
    },
    {
        id: "5", name: "Pelota Adidas FINALE UCL 23", price: 100, category: "Champions League", img: "/images/champions23F.jpeg", stock: 5, description: "Final UCL 23"
    },
    {
        id: "6", name: "Pelota Adidas FINALE UCL 22", price: 100, category: "Champions League", img: "/images/champions22F.jpg", stock: 5, description: "Final UCL 22"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
        resolve (products)
        }, 500 )
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productId))
        }, 500 )
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(
          (prod) => prod.category === categoryId
        );
        resolve(filteredProducts);
      }, 500);
    });
  };
const products = [
    {
        id: "1", name: "Pelota 1", price: 100, category: "Mundiales", img:"./images/pelota.png" , stock: 5, description: "Pelota 1"
    },
    {
        id: "2", name: "Pelota 2", price: 100, category: "Mundiales", img: "./images/pelota.png", stock: 5, description: "Pelota 2"
    },
    {
        id: "3", name: "Pelota 3", price: 100, category: "Copa Libertadores", img: "./images/pelota.png", stock: 5, description: "Pelota 3"
    },
    {
        id: "4", name: "Pelota 4", price: 100, category: "Copa Libertadores", img: "./images/pelota.png", stock: 5, description: "Pelota 4"
    },
    {
        id: "5", name: "Pelota 5", price: 100, category: "Champions League", img: "./images/pelota.png", stock: 5, description: "Pelota 5"
    },
    {
        id: "6", name: "Pelota 6", price: 100, category: "Champions League", img: "./images/pelota.png", stock: 5, description: "Pelota 6"
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
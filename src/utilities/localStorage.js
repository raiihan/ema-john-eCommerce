const setLocalStorage = id => {
    let shoppingCart = getCartInfo();

    // const getCart = getCartInfo();
    // if (getCart) {
    //     shoppingCart = JSON.parse(getCart);
    // }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getCartInfo = () => {
    let shoppingCart = {}
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        shoppingCart = JSON.parse(getCart)
    }
    return shoppingCart;
}


const removeFromStorage = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export {
    setLocalStorage,
    getCartInfo,
    removeFromStorage,
};

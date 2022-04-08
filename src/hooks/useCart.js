import { useEffect, useState } from "react"
import { getCartInfo } from "../utilities/localStorage";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getCartInfo();
        const savedCart = [];
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                const quantity = storedCart[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
        }
        setCart(savedCart);
    }, [products]);
    return [cart, setCart];
}
export default useCart;
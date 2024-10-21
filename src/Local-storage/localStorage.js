const getData = () => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
};

const savedCartToLs = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
};

const addToLocalStorage = (id) => {
    const cart = getData();
    cart.push(id);
    savedCartToLs(cart)
};

export { addToLocalStorage , getData };

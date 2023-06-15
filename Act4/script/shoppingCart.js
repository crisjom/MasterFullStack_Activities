class ShoppingCart {

    #products

    constructor(products) {
        this.#products = products;
    }

    getProducts() {
        return this.#products;
    }

    /*

    updateUnits(sku, units) {
        const product = this.#products.find(product => product.sku === sku);
        if (product) {
            product.units = units;
            console.log(`Units updated for "${product.title}" (SKU: ${product.sku}): ${units}`);
        } else {
            console.log(`Product with SKU "${sku}" not found in the cart.`);
        }
    }

    getProductInfo(sku) {
        const product = this.#products.find(product => product.sku === sku);
        if (product) {
            const { sku, units } = product;
            console.log(`Product Info - SKU: ${sku}, Units: ${units}`);
            return { sku, units };
        } else {
            console.log(`Product with SKU "${sku}" not found in the cart.`);
            return null;
        }
    }

    getCartTotal() {
        let total = 0;
        this.#products.forEach(product => {
            total += product.price * product.units;
        });

        const currency = "$"; // Set the currency according to your requirement

        const productInfo = this.#products.map(product => {
            const { sku, units } = product;
            return { sku, units };
        });

        const cartTotal = {
            total,
            currency,
            products: productInfo
        };

        console.log("Cart Total:", cartTotal);
        return cartTotal;
    }

    addItem(product) {
        this.#products.push(product);
        console.log(`"${product.title}" added to the cart.`);
    }

    removeItem(product) {
        const index = this.#products.findIndex(item => item.sku === product.sku);
        if (index !== -1) {
            this.#products.splice(index, 1);
            console.log(`"${product.title}" removed from the cart.`);
        } else {
            console.log(`Product "${product.title}" not found in the cart.`);
        }
    }

    emptyCart() {
        this.#products = [];
        console.log("The cart has been emptied.");
    }

    showItems() {
        console.log("Items in the cart:");
        this.#products.forEach((product, index) => {
            console.log(`${index + 1}. SKU: ${product.sku} | Title: ${product.title} | Price: ${product.price}`);
        });
    }
    */
}
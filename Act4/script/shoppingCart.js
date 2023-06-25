// Class ShoppingCart: Represents a shopping cart that contains products.

class ShoppingCart {

    #products; // Private array to store the cart's products
    #currency; // Currency used for prices

    constructor(products, currency) {
        this.#products = products;
        this.#currency = currency;
    }

    // updateUnits: Method to update the quantity of a product in the cart.
    // Description --> Find the product by SKU and update the units.
    //                Calculate the total price of the product 
    //                and round it to 2 decimal places.

    updateUnits(sku, units) {
        const product = this.#products.find(product => product.SKU === sku);
        if (product) {
            product.units = units;
            product.total = (units * product.price).toFixed(2);
            console.log(`Units updated for "${product.title}" (SKU: ${product.SKU}): ${product.units} ${product.total}`);
            return product.total;
        } else {
            console.log(`Product with SKU "${sku}" not found in the cart.`);
        }
    }

    // getProductInfo: Method to get the information of a product in the cart using its SKU
    // Description --> Find the product by SKU and extract its information.
    //                Round the total price to 2 decimal places. 
    //                If the product doesn't exist, display an error message and return null.
    //                If the product exits, return object with pruduct information.

    getProductInfo(sku) {
        const product = this.#products.find(product => product.SKU === sku);
        if (product) {
            const { title, price, SKU, units } = product;
            console.log(`Product Info - title: ${product.title}, price: ${product.price} SKU: ${product.SKU}, Units: ${product.units}, Total: ${product.total}`);
            return {
                title: product.title,
                SKU: product.SKU,
                price: product.price,
                units: product.units,
                total: (product.price * product.units).toFixed(2)

            };
        } else {
            console.log(`Product with SKU "${sku}" not found in the cart.`);
            return null;
        }
    }

    // getCartTotal: Method to get the total of the cart and information of all products.
    // Description --> Initialize the cart total and an array to store product information.
    //                Calculate the car total. 
    //                Store the product information in the array.
    //                Return an object with the total, currency, and product information.

    getCartTotal() {
        let total = 0;
        const productInfo = [];

        this.#products.forEach(product => {
            total += product.price * product.units;
            const productData = this.getProductInfo(product.SKU);
            productInfo.push(productData);
        });

        const currency = this.#currency;

        const cartTotal = {
            total: total.toFixed(2),
            currency: currency,
            products: productInfo
        };

        return cartTotal;
    }

}
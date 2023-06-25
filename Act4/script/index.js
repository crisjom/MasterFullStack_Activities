document.addEventListener('DOMContentLoaded', function () {

    fetch('https://jsonblob.com/api/jsonBlob/1122554081330872320').then(response => response.json()).then(posts => {
        console.log(posts);
        const currency = posts.currency;
        const products = posts.products;
        const cart = new ShoppingCart(products, currency);

        const productTable = new ProductsTable(cart);

        productTable.fillTableHTML();
    });
    

});
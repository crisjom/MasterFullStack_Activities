class ProductsTable {

    #products;
    #isEmpty;

    constructor(cart) {
        this.#products = cart.getProducts();
        this.#isEmpty = cart.getProducts().length === 0;
    }

    noProductsTextHtml() {
        const productsTable = document.getElementById('no-product-id');
        const noProduct = document.createElement('p');

        noProduct.textContent = 'El carrito está vacío';

        productsTable.appendChild(noProduct);
    }

    setTableRows() {
        const productsTable = document.getElementById('product-table-id');
        this.#products.forEach(product => {
            const tableRow = document.createElement('tr');
            productsTable.appendChild(tableRow);
        });
    }

    fillTableHtml() {
        if (this.#isEmpty) {
            this.noProductsTextHtml();
        }
        else {
            this.setTableRows();
        }
    }







    /*
    const productsTableCreateRows = () => {
        const productsTable = document.getElementById('product-table-id');
        const productsTableRows = document.createElement('tr');
    }
    
    
    
    const productsTableNoEmpty = () => {
    
    }
    
    
    const fillProductsTable = (cart) => {
        if (cart.checkCartEmpty()) {
            productsTableIsEmpty();
        }
    }
    */
}
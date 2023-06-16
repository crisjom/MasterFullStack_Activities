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
            const addProductToHTML = `<td class="product-table__cell"><h2>$(product.tittle)</h2><p>Ref: $(product.SKU)</p></td>`;
            const addProductToHTML = `<td class="product-table__cell--input"><button onclick="decrement()">-</button><input type="number" id="quantity" value="1"><button onclick="increment()">+</button></td>`;
            const tableRow = document.createElement('tr');
            tableRow.id = product.SKU;
            //tableRow.innerHTML = 
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

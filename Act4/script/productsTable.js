// Class ProductsTable: Represents a shopping cart that contains products.

class ProductsTable {

  #cart; //Reference to the shopping cart object
  #cartTotal; // Get the total information from the cart

  constructor(cart) {
    this.#cart = cart;
    this.#cartTotal = cart.getCartTotal();
  }

  // createNoProductsTextHTML: Create HTML for displaying a message when there 
  //                            are no products in the cart and Total price is 0.
  // Description --> Create the HTML elements for displaying the message.
  //                Append the elements to the appropriate containers in the DOM. 

  createNoProductsTextHTML() {
    const addNoProductToTotalTableHTML = `
      <td class="resume-table__total">TOTAL</td>
      <td>0 $</td>
      `;
    const tableRow = document.createElement('tr');
    tableRow.classList.add("resume-table__footer");
    tableRow.innerHTML = addNoProductToTotalTableHTML;
    const productsTotalTable = document.getElementById('total-table-id');
    productsTotalTable.appendChild(tableRow);

    const productsTable = document.getElementById('no-product-id');
    const noProduct = document.createElement('p');
    noProduct.textContent = 'El carrito está vacío';
    productsTable.appendChild(noProduct);
  }

  // inputButtonClickHandler: Event handler for button clicks to update product quantity. 
  // Description --> Update the quantity of the product in the cart depending on the boton
  //                pulsed(+) or (-).
  //                Update the total price of the product in the table. 
  //                Update the overall cart total.

  inputButtonClickHandler(event) {
    const button = event.target;
    const input = button.parentNode.querySelector('.input-quantity');
    const currentQuantity = parseInt(input.value);
    const data = button.parentNode;
    const sku = data.parentNode.id;

    if (button.textContent === '-') {
      if (currentQuantity > 0) {
        input.value = currentQuantity - 1;
        this.#cart.updateUnits(sku, input.value);
        this.updateTableTotal(sku);
        this.updateTotal();
      }
    } else if (button.textContent === '+') {
      input.value = currentQuantity + 1;
      this.#cart.updateUnits(sku, input.value);
      this.updateTableTotal(sku);
      this.updateTotal();
    }
  }

  // createTableRowHTML: Create HTML for a table row displaying a product. 
  // Description --> Create HTML elements for product details, quantity input, price,
  //                and total price.
  //                Set appropriate class names and values. 
  //                Attach event listeners to the input buttons for quantity adjustment.
  //                Return the created table row element.

  createTableRowHTML(product) {
    const addProductToHTML = `
        <td class="product-table__cell products-table__header-product">
          <h2 class="product-name">${product.title}</h2>
          <p>Ref: ${product.SKU}</p>
        </td>
      `;
    const addQuantityToHTML = `
        <td class="product-table__cell--input products-table__header-others">
          <button class="input-button">-</button>
          <input class="input-quantity" type="number" id="${product.SKU}-quantity" value="1">
          <button class="input-button">+</button>
        </td>
      `;
    const addPriceToHTML = `
        <td class="product-table__cell products-table__header-others">
          <p>${product.price} ${this.#cartTotal.currency}</p>
        </td>
      `;
    const addTotalPriceToHTML = `
        <td id="${product.SKU}_total" class="product-table__cell products-table__header-others">
          <p>${product.price} ${this.#cartTotal.currency}</p>
        </td>
      `;
    const tableRow = document.createElement('tr');
    tableRow.classList.add("products-table__rows");
    tableRow.id = product.SKU;
    tableRow.innerHTML = addProductToHTML + addQuantityToHTML + addPriceToHTML + addTotalPriceToHTML;
    const buttons = tableRow.querySelectorAll('.input-button');
    buttons.forEach(button => {
      button.addEventListener('click', this.inputButtonClickHandler.bind(this));
    });
    return tableRow;
  }

  // createTotalTableRowHTML: Create HTML for a table row displaying the total price of a product
  //                          in Total Table. 
  // Description --> Create HTML elements for displaying product title and total price.
  //                Set appropriate class names and values.
  //                Return the created table row element.

  createTotalTableRowHTML(product) {
    const addProductToHTML = `
        <td class="resume-table__total">
          <p>${product.title}</p>
        </td>
      `;
    const addTotalPriceToHTML = `
      <td id="${product.SKU}_total_table" class="">
        <p>${product.price} ${this.#cartTotal.currency}</p>
      </td>
    `;
    const tableRow = document.createElement('tr');
    tableRow.id = product.SKU + "total-table";
    tableRow.innerHTML = addProductToHTML + addTotalPriceToHTML;
    return tableRow;
  }

  // setTableRows: Set the table rows for displaying product information.
  // Description --> Get the product table element from the DOM.
  //                Iterate through each product in the cart total.
  //                Retrieve the product information from the cart.
  //                Create a table row for each product and append it to the table.

  setTableRows() {
    const productsTable = document.getElementById('product-table-id');
    const products = this.#cartTotal.products;
    products.forEach(product => {
      const productInfo = this.#cart.getProductInfo(product.SKU);
      const setUnits = this.#cart.updateUnits(product.SKU, 1);
      const tableRow = this.createTableRowHTML(productInfo);
      productsTable.appendChild(tableRow);
    });
  }

  // setTotalTableRows: Set the table rows for displaying the total prices.
  // Description --> Get the total table element from the DOM.
  //                Iterate through each product in the cart total.
  //                Retrieve the product information from the cart.
  //                Create a table row for each product's total price and append it to the table.
  //                Calculate and append the overall cart total to the table.

  setTotalTableRows() {
    const productsTable = document.getElementById('total-table-id');
    const products = this.#cartTotal.products;
    products.forEach(product => {
      const productInfo = this.#cart.getProductInfo(product.SKU);
      const tableRow = this.createTotalTableRowHTML(productInfo);
      tableRow.classList.add("resume-table__rows");
      productsTable.appendChild(tableRow);
    });

    const total = this.#cart.getCartTotal().total;
    const addTotalToHTML = `
      <td class="resume-table__total">TOTAL</td>
      <td id="total">${total} ${this.#cartTotal.currency}</td>
      `;
    const tableRow = document.createElement('tr');
    tableRow.classList.add("resume-table__footer");
    tableRow.innerHTML = addTotalToHTML;
    const productsTotalTable = document.getElementById('total-table-id');
    productsTotalTable.appendChild(tableRow);
  }

  // updateTableTotal: Update the total price of a product in the table.
  // Description --> Retrieve the updated product information from the cart.
  //                Get the corresponding DOM element for the total price and update its value.

  updateTableTotal(sku) {
    const product = this.#cart.getProductInfo(sku);
    const totalValueID = sku + "_total"
    const totalValueinTotalTableID = sku + "_total_table"
    const productRow = document.getElementById(totalValueID);
    productRow.querySelector('p').textContent = product.total + " " + this.#cartTotal.currency;
    const productRowTotalTable = document.getElementById(totalValueinTotalTableID);
    productRowTotalTable.querySelector('p').textContent = product.total + " " + this.#cartTotal.currency;
  }

  // updateTotal: Update the overall cart total displayed in the table.
  // Description --> Get the overall cart total from the cart.
  //                Update the corresponding DOM element with the new total value.

  updateTotal() {
    const total = this.#cart.getCartTotal().total;
    const productRow = document.getElementById("total");
    productRow.textContent = total + " " + this.#cartTotal.currency;
  }

  // fillTableHTML: Fill the table with appropriate HTML based on the cart's product information.
  // Description --> Check if there are any products in the cart.
  //                If there are no products, create and display a message.
  //                Otherwise, populate the tables.

  fillTableHTML() {
    if (this.#cartTotal.products.length === 0) {
      this.createNoProductsTextHTML();
    } else {
      this.setTableRows();
      this.setTotalTableRows();
    }
  }
};




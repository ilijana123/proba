var shop = ['apple', 'banana', 'pear', 'strawberry'];
var kupeni_lista = [];
function addRows() {
    var table = document.getElementById('shopTable');
    var rowCount = table.rows.length;
    var productName = document.getElementById('myInput').value;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;

    if (shop.indexOf(productName) === -1) {
        alert('Изберете продукт од листата.');
        return;
    }

    if (productName && quantity && price) {
        var total = (parseFloat(quantity) * parseFloat(price));
        var row = table.insertRow(rowCount - 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = productName;
        cell2.innerHTML = quantity;
        cell3.innerHTML = price;
        cell4.innerHTML = total.toFixed(2);
        cell5.innerHTML = '<button onclick="deleteRow(this)" class="delete-button">&#xf014;</button>';
        funkcija();
    } else {
        alert('Внесете ги сите информации за производот.');
    }
    kupeni_lista.push({ name: productName, qnty: quantity, price: price });
}

function deleteRow(button) {
    var table = document.getElementById('shopTable');
    var row = button.parentNode.parentNode;
    table.deleteRow(row.rowIndex);
    funkcija(); // Ажурирање на vkupno при бришење на ред
}

function filterProducts() {
    var input = document.getElementById('myInput');
    var filter = input.value.toLowerCase();
    var datalist = document.getElementById('products');
    datalist.innerHTML = '';
    var matchingProducts = getMatchingProducts(filter);
    for (var i = 0; i < matchingProducts.length; i++) {
        var option = document.createElement('option');
        option.value = matchingProducts[i];
        datalist.appendChild(option);
    }
}

function getMatchingProducts(filter) {
    var allProducts = ['apple', 'banana', 'pear', 'strawberry'];
    return allProducts.filter(function (product) {
        return product.toLowerCase().indexOf(filter) !== -1;
    });
}

function funkcija() {
    const tabela = document.getElementById('shopTable');
    var total = 0;

    for (let i = 1; i < tabela.rows.length - 1; i++) {
        const cells = tabela.rows[i].cells;
        const quantity = parseFloat(cells[1].textContent);
        const price = parseFloat(cells[2].textContent);
        total += quantity * price;
    }

    document.getElementById('totalValue').textContent = total.toFixed(2);
}
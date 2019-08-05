//business Logic
function Order(size, crust, topping, quantity, price) {
    this.sizeofpizza = size;
    this.crustofpizza = crust;
    this.toppingofpizza = topping;
    this.priceofpizza = price;
    this.quantityofpizza = quantity;
}
Order.prototype.allInformation = function () {
    return this.sizeofpizza + "," + this.crustofpizza + "," + this.toppingofpizza + "," + this.priceofpizza + "," + this.quantityofpizza;
}

$(document).ready(function () {

    $('#project form').submit(function () {

        var mop = $('#os').val()
        alert(mop);
        var yop = $('#cr').val()
        alert(yop);
        var lol = $('#pi').val()
        alert(lol);
        var sos = $('#adr').val()
        alert(sos);

        event.preventDefault()

    });
});



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

    $('#project form').submit(function (event) {

        var mop = $('#os').val()
        alert(mop);
        var yop = $('#cr').val()
        alert(yop);
        var lol = $('#pi').val()
        alert(lol);
        var sos = $('#adr').val()
        alert(sos);
        var pop = $("#op").val()
        alert(pop);

        var getlocation = prompt("tell your location:");
        alert("will be delivered at" + " " + getlocation);
        $('.form-group').on('input', '.prc', function () {
            var totalSum = 0;
            $('.form-group .prc').each(function () {
                var inputVal = $(this).val();
                if ($.isNumeric(inputVal)) {
                    totalSum += parseFloat(inputVal);
                }


            });
            $('#result').val(totalSum);
        })
    });
    // $("#solution").show();
    event.preventDefault();

});



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

        var mop = parseInt($('#os').val())
        console.log(mop);
        var yop = parseInt($('#cr').val())

        console.log(yop);
        var lol = parseInt($('#pi').val())
        console.log(lol);
        var sos = parseInt($('#adr').val())
        console.log(sos);
        var pop = parseInt($("#op").val())
        console.log(pop);
        console.log(mop + yop + lol + sos + pop);
        var getlocation = prompt("tell your location:");
        alert("will be delivered at" + " " + getlocation);
        $("#result").text(mop + yop + lol + sos + pop);
        // $('.form-group').on('select', function () {
        //     var totalSum = 0;
        //     $('.form-group').each(function () {
        //         var selectVal = $(this).val();
        //         if ($.isString(selectVal)) {
        //             totalSum += parseFloat(selectVal);
        //         }


        //     });

        // })
        // var fol = parseInt(mop)
        // var lop = parseInt(yop)
        // var tol = parseInt(lol)
        // var nam = parseInt(sos)
        // var kell = parseInt(pop)
        // console.log(mop);
        // $('#result').val(totalSum);
        event.preventDefault();
    });
    // $("#solution").show();


});



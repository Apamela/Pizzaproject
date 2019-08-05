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

    $('button').click(function () {
        var newOrder;
        if ($('#os').val()) {
            var entersizeofpizza = $('#os').val();
            console.log(entersizeofpizza)
        }
        else if ($('#us').val()) {
            var entersizeofpizza = $('#us').val();
            console.log(entersizeofpizza)
        }

        else if ($('#ss').val()) {
            var entersizeofpizza = $('#ss').val();
            console.log(entersizeofpizza)
        }

        if ($('#cr').val()) {
            var entercrustofpizza = $('#cr').val();
            console.log(entercrustofpizza)
        }
        else if ($('#st').val()) {
            var entercrustofpizza = $('#st').val();
            console.log(entercrustofpizza)
        }

        else if ($('#tr').val()) {
            var entercrustofpizza = $('#tr').val();
            console.log(entercrustofpizza)
        }

        if ($('#pi').val()) {
            var entertoppingofpizza = $('#pi').val();
            console.log(entertoppingofpizza)
        }
        else if ($('#p1').val()) {
            var entertoppingofpizza = $('#p1').val();
            console.log(entertoppingofpizza)
        }
        else if ($('#p2').val()) {
            var entertoppingofpizza = $('#p2').val();
            console.log(entertoppingofpizza)
        }
        else if ($('#p3').val()) {
            var entertoppingofpizza = $('#p3').val();
            console.log(entertoppingofpizza)
        }

        if ($('#pop').val()) {
            var enterquantityofpizza = $('#pop').val();
            console.log(enterquantityofpizza)
        }

        var newOrder = new Order(entersizeofpizza, entercrustofpizza, entertoppingofpizza, enterpriceofpizza, enterpriceofquantity);
        console.log(newOrder)

        // $('ul#done').append("<li><span>" + newOrder.allInformation() + "</span></li>");
        // if ($('#pop').val() > 1) {
        //     console.log()

        // $("ul#done").append("<li><span class='contact'>" + newsand.firstName + "</span></li>");
        $('ul#done').append("<li><span " + newOrder.allInfo + "</span></li>");

        $(".contact2").last().click(function () {
            $("#received*pizza*").show();
            $(".sizeofpizza").text(newOrder.sizeofpizza);
            $(".crustofpizza").text(newOrder.crustofpizza);
            $(".toppingofpizza").text(newOrder.toppingofpizza);
            $(".priceofpizza").text(newOrder.priceofpizza);
            $(".quantityofpizza").text(newOrder.quantityofpizza);
        });
    });
});



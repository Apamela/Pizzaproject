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
        if ($('#pr').val()) {
            var enterpriceofpizza = $('#pr').val();
            console.log(enterpriceofpizza)
        }
        else if ($('#ic').val()) {
            var enterpriceofpizza = $('#ic').val();
            console.log(enterpriceofpizza)
        }
        if ($('#ce').val()) {
            var enterpriceofpizza = $('#ce').val();
            console.log(enterpriceofpizza)
        }
        if ($('#pop').val()) {
            var enterquantityofpizza = $('#pop').val();
            console.log(enterquantityofpizza)
        }
        // else if ($('#topping3').val()) {
        //     var inputtedpizzatoppings = $('#p').val();
        //     console.log(inputtedpizzatoppings)
        // }
        // else if ($('#topping4').val()) {
        //     var inputtedpizzatoppings = $('#topping4').val();
        //     console.log(inputtedpizzatoppings)
        // }
        // else if ($('#topping5').val()) {

        //     var inputtedpizzatoppings = $('#topping5').val();
        //     console.log(inputtedpizzatoppings)
        // }

        // else if ($('#topping6').val()) {
        //     var inputtedpizzatoppings = $('#topping6').val();
        //     console.log(inputtedpizzatoppings)
        // }
        // else if ($('#topping7').val()) {
        //     var inputtedpizzatoppings = $('#topping7').val();
        //     console.log(inputtedpizzatoppings)
        // }
        // else if ($('#topping8').val()) {
        //     var inputtedpizzatoppings = $('#topping8').val();
        //     console.log(inputtedpizzatoppings)
        // }
        // else if ($('#topping9').val()) {
        //     var inputtedpizzatoppings = $('#topping9').val();
        //     console.log(inputtedpizzatoppings)
        // }

        if ($('#hide3').val()) {
            var inputtedpizzaquantity = $('#hide3').val();
            console.log(inputtedpizzaquantity)
        }

        // if ($('#delivery1').val()) {
        //     var inputtedpizzadelivery = $('#delivery1').val();
        //     console.log(inputtedpizzadelivery)
        // }
        // if ($('#delivery2').val()) {
        //     var inputtedpizzadelivery = $('#delivery2').val();
        //     console.log(inputtedpizzadelivery)
        // }

        var newOrder = new Order(entersizeofpizza, entercrustofpizza, entertoppingofpizza, enterpriceofpizza,enterpriceofquantity)  ;
        console.log(newOrder)

        $('ul#orderone').append("<li><span>" + newOrder.allInformation() + "</span></li>");
        if ($('#hide3').val() > 1) {
            console.log()enterpriceofpizza
        }
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
        $('ul#done').append("<li><span class='contact1'>" + newOrder.allInfo + "</span></li>");

        $(".contact1").last().click(function () {
            $("#received*pizza*").show();
            $(".sizeofpizza").text(newOrder.sizeofpizza);
            $(".crustofpizza").text(newOrder.crustofpizza);
            $(".toppingofpizza").text(newOrder.toppingofpizza);
            $(".priceofpizza").text(newOrder.priceofpizza);
            $(".quantityofpizza").text(newOrder.quantityofpizza);
        });
    });
});

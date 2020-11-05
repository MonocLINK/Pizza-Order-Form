$(document).ready(function() {
    // event handlers
    $(".nav-link").click(showTab); // tab clicking
    $(".next").click(nextTab); // next button
    $("#placeOrder").click(outputResults); // submit button

    // show the tab that got clicked
    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    // next button
    function nextTab() {
        $('.nav-item > .active').parent().next('li').find('a').trigger('click');
    }

    // the beef of the program
    function outputResults() {
        // price vars
        var sizeSmallPrice = 7;
        var sizeMediumPrice = 9;
        var sizeLargePrice = 12;
        var toppingPrice = 1;
        var meatPrice = 1.5;

        var tax = 0.51;
        var delieveryFee = 2;

        var finalSizePrice;
        var finalToppingPrice;
        var finalMeatPrice;
        var subtotal;
        var grandTotal;

        // input vars
        var pizzaSize = $("input[name='pizzaSize']:checked").val();
        var crustType = $("input[name='pizzaCrust']:checked").val();

        var numToppings = $("input[name='pizzaTopping']:checked").length;
        var numMeats = $("input[name='pizzaMeat']:checked").length;

        var name = $("#firstName").val() + " " + $("#lastName").val();
        var phoneNumber = $("#phoneNumber").val();

        var streetAddress = $("#streetAddress").val();
        var apt = $("#apt").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zip = $("#zip").val();
        var finalAddress = streetAddress + " " + apt + " " + city + " " + state + " " + zip;

        // math for pricing
        finalToppingPrice = toppingPrice * numToppings;
        finalMeatPrice = meatPrice * numMeats;

        if (pizzaSize === "Small") {
            finalSizePrice = sizeSmallPrice;
        } else if (pizzaSize === "Medium") {
            finalSizePrice = sizeMediumPrice;
        } else {
            finalSizePrice = sizeLargePrice;
        }

        subtotal = finalToppingPrice + finalMeatPrice + finalSizePrice;
        grandTotal = (subtotal * tax) + delieveryFee;

        // output
        $("#nameOutput").text(name);
        $("#addressOutput").text(finalAddress);
        $("#phoneOutput").text(phoneNumber);

        $("#sizeOutput").text(pizzaSize);
        $("#crustOutput").text(crustType);
        $("#toppingOutput").text(numToppings);
        $("#meatOutput").text(numMeats);

        $("#subtotalOutput").text("$" + subtotal.toFixed(2));
        $("#taxOutput").text(tax + "%");
        $("#delieveryOutput").text("$" + delieveryFee.toFixed(2));
        $("#grandTotalOutput").text("$" + grandTotal.toFixed(2));
    }
});
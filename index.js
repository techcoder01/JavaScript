"use strict";
exports.__esModule = true;
function calculateDiscount(productPrice, discountPercentage) {
    var discountAmount = productPrice * (discountPercentage / 100);
    var finalPrice = productPrice - discountAmount;
    if (discountPercentage >= 50) {
        console.log('Error: Invalid discount Percentage');
    }
    else {
        console.log("Original Price: ".concat(productPrice));
        console.log("Discount Percentage: ".concat(discountPercentage, "%"));
        console.log("Discount Amount: ".concat(discountAmount));
        console.log("Final Price: ".concat(finalPrice));
    }
}
calculateDiscount(1000, 50);

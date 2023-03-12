function calculateDiscount(productPrice:number , discountPercentage:number):void {
    let discountAmount: number = productPrice * (discountPercentage/100);
    let finalPrice: number = productPrice - discountAmount;

    if (discountPercentage >= 50){
        console.log('Error: Invalid discount Percentage');
    } else {
        console.log(`Original Price: ${productPrice}`);
        console.log(`Discount Percentage: ${discountPercentage}%`);
        console.log(`Discount Amount: ${discountAmount}`);
        console.log(`Final Price: ${finalPrice}`);
    }
}

calculateDiscount(1000 , 50);

export{}
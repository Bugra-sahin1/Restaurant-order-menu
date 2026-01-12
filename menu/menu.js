function addToCart(foodName, price){
    var count = parseInt(localStorage.getItem("cartcount"));
    if ( isNaN(count)){
        count = 0;
    }

    for ( var i = 1; i <= count; i++){
        if ( localStorage.getItem("foodName_" + i) === foodName){
            var quantity = parseInt(localStorage.getItem("quantity_" + i));
            localStorage.setItem("quantity_" + i, quantity + 1);
            alert("Another " + foodName + " is added to cart");
            return;
        }
    }
    count = count + 1;   
    localStorage.setItem("foodName_" + count, foodName);
    localStorage.setItem("price_" + count, price);
    localStorage.setItem("quantity_" + count, 1);
    localStorage.setItem("cartcount", count);
    alert(foodName + " your order is added to cart");
}
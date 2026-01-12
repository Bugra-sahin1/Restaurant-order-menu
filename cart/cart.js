function cart(){
    var count = localStorage.getItem("cartcount");
    if (count == "0" || count == null ){
        document.getElementById("cartitems").innerText = "The cart is empty add some food ";
        return;
    }
    count = parseInt(count);
    var totalprice = 0;
    var totalitems = 0;
    var output = "";
    for( var i = 1; i <= count; i++){
        var foodName = localStorage.getItem("foodName_" + i);
        if(foodName == null) continue;
        var price = localStorage.getItem("price_" + i);
        var quantity = localStorage.getItem("quantity_" + i);
        if ( foodName != null && price != null && quantity != null ){
            output += "<p>Food Name:" + foodName + "</p>";
            output += "<p>Price: " + price + "</p>";
            output += "<p>Quantity: " + quantity + "</p>";
            output += "<button onclick='removeitem(" + i + ")'>Remove Item</button><hr>";

            totalprice += parseFloat(price) * parseInt(quantity);
            totalitems += parseInt(quantity);
        }
      
    }
    document.getElementById("cartitems").innerHTML = output;
    document.getElementById("totalitems").innerText ="Total items: " + totalitems;
    document.getElementById("totalprice").innerText = "Total price : TL" + totalprice;
}


function confirmorder(){
    var tablenumber = document.getElementById("tablenumber").value;

    if ( tablenumber == ""){
        alert("Please enter your table number... ");
        return;
    }
    var form = document.getElementById("orderform");
    var count = parseInt(localStorage.getItem("cartcount"));
    for ( var i = 1; i <= count; i++){
        var foodName = localStorage.getItem("foodName_" + i);
        var price = parseInt(localStorage.getItem("price_" + i));
        var quantity = localStorage.getItem("quantity_" + i);
        if( foodName=== null) continue;

        form.innerHTML += '<input type="hidden" name="foodName[]" value="'+ foodName + '">';
        form.innerHTML += '<input type="hidden" name="price[]" value ="'+ price + '">';
        form.innerHTML += '<input type="hidden" name="quantity[]" value ="'+ quantity + '">';

    document.getElementById("tablenumber").value = tablenumber;
    document.getElementById("orderform").submit();

}
}


function clearcart(){
    localStorage.clear();
    alert("Your cart has been cleared...");
    location.reload();
}



function removeitem(index){
    var count = parseInt(localStorage.getItem("cartcount"));
    var quantity1 = parseInt(localStorage.getItem("quantity_" + index));
    if (quantity1 > 1){
        localStorage.setItem("quantity_" + index, quantity1 - 1);
        cart();
        alert("Your one food is removed");
        return;

    }
    for ( var i = index; i < count; i++){
        localStorage.setItem("foodName_" + i, localStorage.getItem("foodName_" + (i + 1)));
        localStorage.setItem("price_" + i, localStorage.getItem("price_" + (i + 1)));
        localStorage.setItem("quantity_" + i, localStorage.getItem("quantity_" + (i + 1)));
        }
    
    localStorage.removeItem("foodName_" + count);
    localStorage.removeItem("price_" + count);
    localStorage.removeItem("quantity_" + count);
   count = count - 1; 
    if ( count === 0){
        localStorage.removeItem("cartcount");
    } else {
        localStorage.setItem("cartcount", count);
    }
    cart();
    alert("Your all items are removed ")
}



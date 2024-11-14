const cart=["shoes","pants","kurta"];

const promise=createOrder(cart);

function createOrder(cart){

}

promise.then(function(orderId){
    proceedToPayment(orderId);
})
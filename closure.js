function counter() {
    let counter=0;
    return function count(){
        counter++;
        console.log(counter);
    }
}

let fun=counter();
fun();
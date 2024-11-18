function sum(n){
    let value=0;
    for(let i=0;i<n;i++){
        value += i;
    }
    return value;
}

function findSum(){
     console.log(sum(100));
}

setTimeout(findSum,1000);
//control does not wait for setTimeout
console.log("SetTimeout is delegated for 1second");
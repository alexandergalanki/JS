// const arr=[1,2,3,4,5];

// console.log(arr.slice(0,1));
// console.log(arr.splice(1,2));


// (()=>{
//     console.log(globalThis);
// })();

var newObj={
    namee:function (){
        console.log(this);
    },
    age:25
}
//newObj.namee();

var newObj2={
    namee:function(){
        console.log(this.age);
        function childfun(){
            console.log(this);
        }
        childfun();
    },
    age:25

}
//newObj2.namee();

var newObj3={
    namee:function(){
        console.log(this);
        const  childfun=()=>{
            console.log(this);
        }
        childfun();
    },
    age:25
}
//newObj3.namee();

document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
});
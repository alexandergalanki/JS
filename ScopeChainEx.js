const myName="bobby";

function first(){
    const age=30;

    if(age>=30){
        const decade=3;
        var millenial=true;
    }
    function second(){
        const job="teacher";
        console.log(`${myName} is a ${age}year's-old ${job},${millenial}`);
    }
    second();
}
first();

//----------------------------------------------------
const a='jonas';
first();

function first(){
    const b='hello';
    second();

    function second(){
        const c ='Hi';
        third();
    }
}

function third(){
    const d='Hey!';
    console.log(d+c+b+a);
    //referenceError;
}
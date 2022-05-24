function con (n1:number,n2:number):number{
    return n1+n2
}
function create(n1:number,n2:number){
    if(n1+n2>0){
        return n1+n2
    }
}




function result (num:number ):void{
console.log(num)
}
let combinevalues:(a:number,b:number)=>number
combinevalues=con
console.log(combinevalues(3,1))
const button= document.querySelector(".click")!;
const clickHandler=(message:string)=>{
    console.log("hello my world is here "+ message)
    };
button.addEventListener('click',clickHandler.bind(this,"jitender"))
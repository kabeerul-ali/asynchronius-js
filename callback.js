function sum(a,b){
    alert(a+b);
}
function sub(a,b){
    alert(a-b);
}
function mul(a,b){
    alert(a*b);
}function div(a,b){
    alert(a/b);
}
function mod(a,b){
    alert(a%b);
}
function calculator(a,b,newfunction){
    newfunction(a,b);
}
do{
    var ch=parseInt(prompt("1.add\n2.sub\n3.mul\n4.div\n5.modulas\n6.exit"));
    let x=parseInt(prompt("enter first value"));
    let y=parseInt(prompt("secound first value"));
    switch(ch){
        case 1:
            calculator(x,y,sum);
            break;
        case 2:
            calculator(x,y,sub);
            break;
        case 3:
            calculator(x,y,mul);
            break;
        case 4:
            calculator(x,y,div);
            break;
        case 5:
                calculator(x,y,mod);
                break;
        default:
            console.log("choice a valid petion");
            break;
    }



}while (ch!=6);
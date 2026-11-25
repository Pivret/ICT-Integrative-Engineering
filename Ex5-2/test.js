function sum1(x,y){
    if(typeof x !== "number" || typeof y !== "number") throw "숫자를 입력하세요";
    return x+y;
}

function sum2(x,y){
    if(x !== "number" || y !== "number") throw new Error("숫자를 입력하세요");
    return x+y;
}

try {
    console.log(sum2("abc", 1));
} catch (error) {
    console.log(error);
}

console.log(sum2("abc", 1));
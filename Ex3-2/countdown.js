console.log("3초 뒤 카운트다운 하겠습니다");

setTimeout(function(){

}, 3000);

let i =5;
let j = setInterval(function(){
    console.log(`${i}초`);
    i--;
    if (i == 0){
        console.log("발사");
        clearInterval(j);
    }
}, 1000);
let arrayA = [4, 11, 2, 10, 3, 1, 100, 20, 30];

arrayA.sort();
console.log('- 문자열로 정렬');
console.log(arrayA);
console.log();
console.log('- 문자열로 정렬(역순)');
console.log(arrayA.reverse());
console.log();

arrayA.sort((itemA, itemB)=>{
    return itemA - itemB;
});
console.log('- 함수로 정렬');
console.log(arrayA);
arrayA.sort((itemA, itemB)=>{
    return itemB - itemA;
});
console.log('- 함수로 정렬(역순)');
console.log(arrayA);

arrayA = [4, 11, 2, 10, 3, 1];
arrayA.sort((itemA, itemB)=>itemA - itemB);
console.log('- 리턴 없이 함수로 정렬');
console.log(arrayA);
arrayA = [4, 11, 2, 10, 3, 1];
arrayA.sort((itemA, itemB)=>itemB - itemA);
console.log('- 리턴 없이 함수로 정렬(역순)');
console.log(arrayA);
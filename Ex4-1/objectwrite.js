const person = {
    name: '임해주',
    age: 21,
    langeuage: ['Korean', 'English']
};

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.langeuage);

person.name = '신하경';
person.age = 20;

person.address = '서울특별시 강남구 신사동';

console.log(person)

delete person.address;

console.log(person);

console.log('name' in person);
console.log('phoneNumber' in person);

let myCar = new Car("Tesla", "Model 3");
console.log("초기 객체:", myCar);

myCar.year = 2025;
myCar["color"] = "Red";
console.log("속성 추가후:", myCar);

delete myCar.year;
delete myCar["color"];
console.log("속성 제거 후:", myCar);
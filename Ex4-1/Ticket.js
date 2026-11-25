class Ticket {
    constructor (name, age){
        this.name = name;
        this.age = age;
    };

    getPrice() {
        if(this.age > 7 && this.age < 14){
            return 5000;
        }
        if(this.age > 13 && this.age < 19){
            return 8000;
        }
        else{
            return 12000;
        }
    }
};


let person = [
    new Ticket("철수", 10),
    new Ticket("영희", 15),
    new Ticket("민수", 20)
];

for(let product of person){
    console.log(`${product.name}의 티켓 가격은 ${product.getPrice()}`)
}

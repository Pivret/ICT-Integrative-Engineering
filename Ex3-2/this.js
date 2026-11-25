const obj = {
    value: 10,
    regularFunc: function() {
        console.log(this.value);
    }
};
obj.regularFunc();

const obj1 = {
    value: 10,
    arrowFunc: () => {
        console.log(this.value);
    }
};
obj1.arrowFunc();
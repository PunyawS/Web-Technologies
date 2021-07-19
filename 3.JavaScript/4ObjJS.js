var myCar = { /*Object 1*/
    brand: "Ford",
    model: "1",
    color: "black",
    yourcar: function(brandyourcar) {
        return brandyourcar + " " + this.model + " " + this.color
    }
};
console.log(myCar.brand)
console.log(myCar.brand + ' ' + myCar.model + ' ' + myCar.color)
console.log(myCar.yourcar('BMW'))

var person ={ /*Object 2*/
    fname: "Piwpiw",
    lname: "Catcat",
    eyecolor: "black",
    fullname: function() {
        return this.fname + " " + this.lname;
    }
}
console.log( person.fullname())
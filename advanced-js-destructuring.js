
//old vanilla js - not destructuring!
let ages = [30, 26, 27];

// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;
console.log(john, mary, joe)
//
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
    paddy: "specialist",
    therese: "QA analyst"
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);



let fruits = ['apple', 'orange', 'peach', 'pineapple', 'mango', 'cherry'];
let [favourite, secFav, ...others] = fruits;
console.log(favourite);
console.log(secFav);
console.log(others);
let age = 10;

switch (age) {
    case 20:
        console.log("user age is 20");
        break;
    case 10:
        console.log("user age is 10");
        break;
    case 5:
        console.log("user age is 5");
        break;
    default:
        console.log("cannot find age number");
}

//functions
function addition(num1, num2) {
    console.log("addition of number:" + num1 + " " + num2);
    console.log(num1 + num2);
}
addition(20, 38)

function greetUser(name) {
    return "good morning " + name;
}

let name = "james";
let greet = greetUser(name);
console.log(greet);

//function: calc
function calculate(num1, operator, num2) {
    console.log(num1 + "" + operator + "" + num2)

    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return "WRONG OPERATOR";
    }
}

let calc = calculate(10, "-", 30);
console.log(calc)

//function c/w

function days(number) {
    switch (number) {
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default:
            return "Wrong number";
    }
}

let daytext = days(4);
console.log(daytext)

//Array, Loop, A rray Method
let list = ["james", 50, true, "human"];
let index_0_list = list[0];
let index_1_list = list[1];
let index_2_list = list[2];
let index_3_list = list[3];

console.log(index_0_list);
console.log(index_1_list);
console.log(index_2_list);
console.log(index_3_list);

//Get Array Length
console.log(list.length);

//CREATING ARAY IN JAVASCRIPT: adding to an array
let list_student_name = [];
list_student_name.push("james");
list_student_name.push("frank");
list_student_name.push("moses");

console.log("added");
console.log(list_student_name);
//updating
list_student_name[1] = "wisdom";
list_student_name[0] = "paul";

console.log("update");
console.log(list_student_name);
//Deleting
list_student_name.pop();
console.log("deleted");
console.log(list_student_name);
//Emptying an array
list_student_name = [];
//merge
let new_student_age = [10, 30, 38, 39, 49];
let old_student_age = [39, 54, 30];
let two_dim_student_age = [new_student_age, old_student_age];
let merge_student_age = [...new_student_age, ...old_student_age];

console.log("merging");
console.log(merge_student_age);

//LOOPING: for, do-while, foreach, while
let numbers = [13, 23, 43, 44, 53, 36];
for (let i = 0; i < numbers.length; i++) {
    let mul_num = numbers[i] / 2;
    console.log(mul_num);
}

let i = 0;
while (i < numbers.length) {
    let mul_num = numbers[i] * 2;
    console.log(mul_num);
    i++;

}
//foreach
numbers.forEach(function (num, index) {
    let mul_num = num * 2;
    console.log(mul_num);
});
numbers.forEach(function (value, index) {
    console.log(value, index);
});
//multiplication table
function runMultiplicationtable(multiplicands) {
    for (i = 1; i < 12; i++) {
        let mult = i * multiplicands;
        console.log(i + "*" + multiplicands + "=" + mult);
    }
}
runMultiplicationtable(3);

//OBJECT
let user = {
    first_name: "Moses",
    last_name: "Frank",
    username: "mosesfrank234",
    email: "moses@gmail.com",
    password: "12345",

    loginAcct: function (email, password) {
        if (user.email == email && user.password == password) {
            return "account successfully login";
        } else {
            return "invalid login credentials";
        }
    }
}
console.log(user.loginAcct("moses@gmail.com", "12345"));
user.address = "Nigeria";
user.first_name = "daniel";
user.sayHello = function () {
    console.log("HELLO IT'S ME!");
}
console.log(user);
user.sayHello()

//*CW //1
let sum = 0;
function func(start, end) {
    for (i = start; i <= end; i++) {
        sum = sum + i;
    }
}
func(1, 9);
console.log(sum);

//2
let Myself = {
    name: "Mmesoma",
    surname: "doe",

    period_i_eat: function (period) {
        if (period == "morning") {
            return "i ate bread and egg";
        } else if (period == "afternoon") {
            return "i ate rice";
        } else if (period == "evening") {
            return "i ate beans";
        } else if (period == "night") {
            return "i ate yam";
        } else {
            return "invalid period";
        }
    }
}
console.log(Myself.period_i_eat("morning"));

//3
let myself = {
    Myname: "mmeso",

    sayHelloToMyFriends: function (friends){
        friends.forEach(function (friend){
            console.log("hello "+ friend)
        });
    }
}
myself.sayHelloToMyFriends(["frank", "alex", "john"]);

//Showing an info when you click a button.
let btn=document.getElementById("btn");

btn.onclick =function(){
    alert("you clicked this button.")
}
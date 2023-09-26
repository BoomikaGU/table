function greetCustomer(customerName = "Customer")
{
    console.log("hello" +customerName);
}
greetCustomer();
greetCustomer('Tomm 1');
greetCustomer('Tomm 2');
greetCustomer('Tomm 3');
greetCustomer('Tomm 4');

function checkForValidAge(age) {
    return age>18 ? true : false;
}
var person1 = checkForValidAge(14);
console.log(persion1);
var person2 = checkForValidAge(21);
console.log(person2);
var test = function() {
return marks % 2 === 0 ? "passed" : "failed";
};
console.log(test(101));
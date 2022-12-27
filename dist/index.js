"use strict";
let a = 132133;
let b = "yo";
let c = true;
let g;
let d;
let e;
let f = { key: 5, key2: "value" };
let numbArray = [1, 2, 3];
let numbArray2;
let anyArray = [];
let charArray = ['k', 'f'];
numbArray.forEach(n => n.toLocaleString);
let user = [1, "mohit"];
var Size1;
(function (Size1) {
    Size1["Small"] = "s";
    Size1["Medium"] = "m";
    Size1["Large"] = "l";
})(Size1 || (Size1 = {}));
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 7] = "Small";
    Size2[Size2["Medium"] = 8] = "Medium";
    Size2[Size2["Large"] = 9] = "Large";
})(Size2 || (Size2 = {}));
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Large;
console.log(mySize);
let mySize1 = 2;
console.log(mySize1);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.3;
    return income * 1.7;
}
calculateTax(85457, 2022);
function calculateTax2(income, taxYear) {
    if ((taxYear || 2000) < 2022)
        return income * 1.3;
    return income * 1.7;
}
calculateTax2(85457);
let employee = { id: 1 };
let employee2 = { id: 10 };
let employee3 = { id: 10, name: '' };
let employee4 = {
    id: 10,
    name: '',
    func: (date) => {
        console.log(date);
    }
};
let employee5 = {
    id: 10,
    name: '',
    func: (date) => {
        console.log(date);
    }
};
function ltrToKg(weight) {
    if (typeof weight === 'number')
        return weight * 0.9;
    else
        return parseInt(weight) * 0.9;
}
;
ltrToKg(10);
ltrToKg('10ltr');
let textBox = {
    resize: () => { },
    drag: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hurrey");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customers = null;
if (customers !== null && customers !== undefined)
    console.log(customers[0]);
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
//# sourceMappingURL=index.js.map
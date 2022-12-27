
//                                       Data types of typescript
// ========================================================================================================

// all javascript type = number, string, boolean, null, undefined, object(array, function)
// other any, unknown, never, enum, tuple
// type aliases, union & intersection, type narrowing, nullable types, the unknown type, the never type


//variable ----------------declaration / defination -------------------------------------------------- @
let a =13_21_33;  // let a : number=12; // we can use _ for clear our number code
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
// let big: bigint = 100n; //BigInt literals are not available when targeting lower than ES2020.

let b ="yo"; // let b : string="yo";

let c =true;  // let c : boolean=true;

let g ; //let g : any;

let d : null ;

let e : undefined;

let f : object = {key:5,key2:"value"};


//Array ---------------declaration / defination -------------------------------------------------- @
let numbArray: number[]  = [1,2,3]; //let numbArray = [1,2,3]
let numbArray2: number[] ;
let anyArray = [] ; //let anyArray: any[]
let charArray = ['k','f'] //let charArray: string[]

//How array type declaration help us
//Example
numbArray.forEach(n=>n.toLocaleString) //in numbArray.forEach(n=> n.after putting dot you can see there are lots of option(methods) appear of same type 


//tuple ---------------declaration / defination -------------------------------------------------- @
let user : [number , string ] = [1,"mohit"] //we can't add third value or change parameter type
//user.push(1);  //I can insert third value too but it's not good


//Enum ---------------declaration / defination -------------------------------------------------- @
// const small = 1;
// const medium = 2;
// const large = 3;        //instead of this we can use enum (for list of related constant)

//PascalCase
 enum Size1{Small = 's', Medium = 'm', Large = 'l' }
 enum Size2{Small = 7, Medium , Large } //by default medium = 8, large = 9
 enum Size{Small, Medium , Large } //by default small = 0, medium = 1, large = 2
 let mySize = Size.Large;
 console.log(mySize);
// in .js file you can see
//-------------------------
//code :
// var Size;
// (function (Size) {
//     Size[Size["Small"] = 0] = "Small";
//     Size[Size["Medium"] = 1] = "Medium";
//     Size[Size["Large"] = 2] = "Large";
// })(Size || (Size = {}));
//let mySize = Size.Large;

//for optimize your code in .js you can add const at the beginning of enum
//-------------------------------------------------------------------------
const enum Size3{Small, Medium , Large }
let mySize1 = Size3.Large;
console.log(mySize1);
//now you can see in .js file code was optimized
//----------------------------------------------
//code :
//let mySize1 = 2;


//function ---------------declaration / defination -------------------------------------------------- @
function calculateTax( income : number,taxYear: number):number {  //by default return type is void
    if(taxYear<2022)
    return income*1.3;
    return income*1.7;
}
calculateTax(85_457,2022);  //exect two argument nothing less nothing more(exect two because in this function only two argument available )

//What if the value of one parameter is not madatory to add

// 1
//function calculateTax2( income : number,taxYear = 2000):number {  //we can set default value here
// if((taxYear || 2000)<2022)                        //add default value (if taxYear not available)
// return income*1.3;
// return income*1.7;
// }

// 2
function calculateTax2( income : number,taxYear? : number):number {  //here add Question mark
    if((taxYear || 2000)<2022)                        //add default value (if taxYear not available)
    return income*1.3;
    return income*1.7;
}
calculateTax2(85_457); 


//object ---------------declaration / defination -------------------------------------------------- @
let employee ={id:1}
//  employee.name = "mohit" //we can't add any new property implicitly
let employee2:{
    id:number,
    name?:string      //we can set optional properties using ?
} ={id:10}

let employee3:{
    id:number,
    name:string      
} ={id:10,name:''}  //we can set by default value (note: don't use null or undefined instead of string)

let employee4:{
    readonly id:number,  //if we don't want to change the value in any case then make it just read only memory
    name:string,    
    func:(date: Date)=> void ,  //we can add function like that
} ={
    id:10,
    name:'',
    func:(date: Date)=>{        //we can write definition of function like that
        console.log(date);
    }
}  


//type aliases ---------------declaration / defination -------------------------------------------------- @
//DRY don't repeat your self
type Employee={   //pascal case (best practice)
    readonly id:number,  //write those lines which you want to add every where when someone use this type
    name:string,    
    func:(date: Date)=> void , 
}

let employee5: Employee={    // just write type name instead of write three lines which is already written in Employee type (you can see)
    id:10,
    name:'',
    func:(date: Date)=>{        
        console.log(date);
    }
}  ;


//unions ---------------declaration / defination -------------------------------------------------- @
function ltrToKg(weight: number | string){  //if weight may be number or string 
    if(typeof weight === 'number')  //compare typeof
        return weight*0.9;
    else
        return parseInt(weight)*0.9;
};

ltrToKg(10); //fuction call using number
ltrToKg('10ltr'); //fuction call using number


//intersect ---------------declaration / defination -------------------------------------------------- @
/*let somthing: number & string; //intersect means that variable is of one type as well second 
type but this is not realistic in built-in types so lets create an new type using type aliases*/

type Draggable = {  //create custom type
    //something: number, //variable
    drag:()=>void,     //method
};

type Resizable = {  //create other custom type
    //something: number,
    resize:()=>void,
};

type UI = Draggable & Resizable;  //UI type is intersect of draggable and Resizable

let textBox: UI={
    resize: ()=>{},  //method of Draggable
    drag: ()=>{},    //method of Resizable
}


//Literal ---------------declaration / defination -------------------------------------------------- @
type Qty = 50 | 100;  //It is called as a literal type  
let quantity: Qty = 100;  //this is kind of let [ quantity: 50 | 100 = 100; ]


//Nullable ---------------declaration / defination -------------------------------------------------- @
function greet(name: string | null){
    if(name)
    console.log(name.toUpperCase());
    else
    console.log("hurrey");
    
}
greet(null);


//Optional chaining ---------------declaration / defination -------------------------------------------------- @
type Customer = {
    birthday : Date
    // birthday ?: Date
};

function getCustomer(id: number):Customer | null | undefined{
    return id === 0? null : {birthday: new Date()};
}

let customer = getCustomer(1);
// console.log(customer.birthday);    //we can't do that because customer should be null or undefined

//thats why we have to use if else statement
// if (customer !== null && customer !== undefined){
//     console.log(customer.birthday);
// }                                            //code without chaining operator 

//1. Optional property access operator
console.log(customer?.birthday);                //code with chaining operator "?" with dot operator
// console.log(customer?.birthday?.getFullYear);                //code with chaining operator "?" with dot operator

//2. Optional element access operator (when we dealing with array)
let customers = null
if (customers !== null && customers !== undefined)
 console.log(customers[0]);

// console.log(customers?.[0]);  //if customers[0] is not defined then it logs undefined


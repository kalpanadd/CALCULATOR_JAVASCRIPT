var user_name = 'ram';
console.log('hello '+user_name+' welcome');

var x = 10;
var y = 15;
var z = x + y;

console.log(z);

//variables in js
//var , let, const --keywords

//var name1 = 'kalpana';
//var name2 = "kalpana";
//var name3 = `kal"p"an'ad`;

var camel;
//console.log(name1);
//console.log(name2);
//console.log(name3, camel); //kal"p"an'ad undefined
var marks = 45;
//console.log(marks); //45 in yellow
var marks2 ='45';
//console.log(marks2); //45 in white color

//rules
//can start with letters(a-z,A-Z) _ &
//can't start with numbers
//case sensitive
//can containe numbers,lettes,_ &

//var city = 'hyd';
//var -city2 = '*hyd'; //SyntaxError: Unexpected token -
 // var---global scope
//const--can't assign again
//const name = 'hareram';
//const name ='kl';
//console.log(name); //SyntaxError: Identifier 'name' has already been declared

//let---blocklevel scope

{
    let city = 'kolkata';
    console.log(city);//kolkata
    city = 'fgk';
    console.log(city);
}

city = "secu";
console.log(city);


//const array
//can push new value but can't reassign
const arr1 = [1,2,3,4];
arr1.push(47);
console.log(arr1);

/*most common programming casetypes
1.camelCase ex:ownerNameHi
2.kebab-case
3.snake_case
4.PascalCase
*/



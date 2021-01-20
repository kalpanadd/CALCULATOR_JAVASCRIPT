var arr1 =[100,12,45,15];
console.log(arr1);

var arr2 =['abc','def','ghi','jkl','mno'];
console.log(arr2);

var mix =['kal',123,true,[455,458,77],function fun(){return 1;},hi={name:'harris',age:45}];
console.log(mix);  /*[ 'kal',
                    123,
                    true,
                    [ 455, 458, 77 ],
                    [Function: fun],
                    { name: 'harris', age: 45 } ]    */  


console.log([typeof(mix[0]),typeof(mix[1]),typeof(mix[2]),typeof(mix[3]),typeof(mix[4]),typeof(mix[5])]); //[ 'string', 'number', 'boolean', 'object', 'function', 'object' ]

console.log(mix.length); //6

console.log(mix[(mix.length)-1]); //gives last element

var ww = [77,88,99];
console.log(ww); 

ww[0] ='first';
console.log(ww); //[ 'first', 88, 99 ]

//observe all mutations happened to original array

ww.push('push');
console.log(ww);  //[ 'first', 88, 99, 'push' ]

ww.pop();
console.log(ww);  //[ 'first', 88, 99 ]



 var bb = ['abc','def','ghi','jkl','iop'];

 bb.splice(1,2,'hi','hr');
 console.log(bb); //[ 'abc', 'hi', 'hr', 'jkl', 'iop' ]

 bb.reverse();
 console.log(bb); //[ 'iop', 'jkl', 'hr', 'hi', 'abc' ]

var cc =[11,44,55,440];
cc.shift();
console.log(cc); //[ 44, 55, 440 ]

cc.unshift(10000000);
console.log(cc);  //[ 10000000, 44, 55, 440 ]

var dd = bb.concat(cc);
console.log(dd);   //[ 'iop', 'jkl', 'hr', 'hi', 'abc', 10000000, 44, 55, 440 ]







    




//question1


let x = "extravaganza";
let removechar = x.substring(-4,0);
console.log({removechar});

//qustion 2
const y= "The quick brown fox jumped over the lazy dog";
const addString = y.slice(0,4) + "eat" + y.slice(4);
console.log({ addString});


const story= "The quick brown fox jumps over the lazy dog";
let f ="The quick brown fox jumps over the lazy dog";
console.log(
    (f.match(/brown/g)).length);
console.log(
    (f.match(/the/g)).length);








//question 4
const string1 = "The pupils are reading in the library";
console.log(string1[11]+ "" +string1[12]+ "" +string1[13]);

const string2 = "The child was sitting on the table before it fell";
console.log(string2[12]+ ""+string2[15]+ ""+string2[16]+""+string2[17]+""+string2[18]+""+string2[19]+""+string2[20])


 
//question5


let b = "wonderful";
console.log(b.toUpperCase());


let lowercase = "Amazing";
console.log(lowercase.toLowerCase());

let c = "undERneath";
console.log(c.toLowerCase())


let d = "A wonderful world";
let titleCase = "";
d.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
console.log(titleCase);

//Array

let nilai = [90, 88, 75, 95, 85];

for (let i = 0; i < nilai.lenght; i++){
    console.log("Nilai = ", nolai[i] +5);
}

console.log(nilai);

//nilai[2] = 90;
//console.log{nilai[nilai. lenght -1]};

let john = ["john", " Doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//tostring()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));
//push()
    john.push(true);
    john.push("HELLO");
    console.log(john.join(" - "));

//shift()
john.shift();
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
let buah=["pisang", "jeruk", "apel","Mangga"];
buah.splice(2,0, "Lemon", "kiwi");
console.log(buah);

//concat()
let sayur = ["bayam", "kangkung", "wortel"];
let biji = ["kedelai", "kacang"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//slice()
let kukis = ["oreo", "tanggo", "bengbeng","top","superkeju"];

let kukiscoklat = kukis.slice(0,3);
let kukiskeju = kukis.slice(3);
console.log(kukiscoklat);
console.log(kukiskeju);

//sort()
nilai.sort();
console.log(nilai);

//reverse()
buah.reverse();
console.log(buah);

 
buah.sort().reverse();
console.log(buah);


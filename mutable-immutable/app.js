/*
primitive values = Number,String,BigInt,undefined,boolean,null,Symbol
Structural values = Object,Function (and almost everything made with new keyword)

Mutable = Değeri değiştirilebilen tiplerdir. Javascript dilinde nesneler(objects) ve arrays(diziler) değiştirilebilir tiptir.
*/

//Primitive tipler referans tutamazlar. Örnekte a b'ye aşitlenirken a'nnın bir kopyası oluşturulur ram'de açılan yeni alanda b olarak tutulur.
let a = 1;
let b = a;

a = 3;

console.log("a : " + a);
console.log("b : " + b);

//objeler referans tutabilirler. Aynı ram bloğunda çalışırlar.
let user = {
  name: "ali",
  birthDay: 1994
};
let user2 = user;
user.name = "metin";

console.log(user);
console.log(user2);

// immutable yapabailmek için birkaç yol vardır.
let human = {
  name: "ali",
  age: 27
};

//let human2 = { ...human };
let human2 = Object.assign({}, human);
human.age = 34;

console.log(human);
console.log(human2);

// Redux ile statelerde bulunan object veye arrayleri immutable hale getirerek takibini yapabiliriz.

let sonlar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; // Foydalanuvchi tomonidan kiritilgan sonlar

console.log(sonlar);


let juftSonlar = [];
let toqSonlar = [];

for (let i = 0; i < sonlar.length; i++) {
  if (sonlar[i] % 2 === 0) {
    juftSonlar.push(sonlar[i]);
  } else {
    toqSonlar.push(sonlar[i]);
  }
}

console.log("Juft sonlar:", juftSonlar);
console.log("Toq sonlar:", toqSonlar);
const arr = ["gul", "zaman", "khan"];
for (let prop in arr) {
  // console.log(arr[prop])
}
// new Method forof loop
for (const val of arr) {
  console.log(val);
}
// if array contain object
const array = [
  { key: 5, key2: 6 },
  { key3: 7, key4: 8 },
  { key5: 9, key6: 10 },
  { key7: 11, key8: 12 },
];
// now applying forof loop on arr
for (const key of array) {
  console.log(key);
  // key contain every single object
}
// here we can't destruct obj bcz for of loop gives us every object and each object
// has different keys , and without knowing key , destructing is noy possible
// _____________________________

// Now for in loop
let obj = {
  key: 1,
  key2: 2,
  key3: 3,
  key4: 5,
  
};
console.log(obj.key);
for (const i in obj) {
  console.log(obj[i]);
}
set
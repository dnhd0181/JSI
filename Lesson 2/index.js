const arr = [1,54,6,7]
function myFunction(num) {
    return num +5;
  }
const newArr=arr.map(myFunction)
console.log (newArr)// +5


const arr1 = [1,2,4,5,6];
const arr2 = [1,6,8,9,0];
const result = arr1.filter((element)=>{
return arr2.includes(element);})
console.log (result)//same element


const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];
const k =m.concat(n);
const o= [1,8,10,96,7]
const a=k.filter(answer=> !o.includes(answer))
  console.log (a)//remove element from array
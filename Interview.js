const arr = [1,2,3,4,5,6,7,8,9,10]

function addtoArr(arr,num) {
  let newArr = []
  let lengthArr = arr.length
  arr[lengthArr + 1] = num
  return arr
}
console.log(addtoArr(arr,5))


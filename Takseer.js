function takseer(string) {
  let result = ""
  string = string.replaceAll(" ", "")
  let stringLength = string.length
  let last = stringLength - 1
  if (stringLength % 2 == 0) {
    for (let i = 0; i < stringLength / 2; i++) {
      result = result.concat(string[i])
      result = result.concat(string[last])
      last--
    }
  } else {
    stringLength = stringLength - 1
    for (let i = 0; i < stringLength / 2; i++) {
      result = result.concat(string[i])
      result = result.concat(string[last])
      last--
      if (i == stringLength / 2 - 1) {
        result = result.concat(string[i + 1])
      }
    }
  }
  arr.push(result)
  console.log(result)
  if (result !== check) {
    takseer(arr.at(-1))
  }
}
const arr = []
var string = prompt("Enter value")
arr.push(string)
let arr1 = arr[0]
var check = arr1.replaceAll(" ", "")
takseer(arr.at(-1))
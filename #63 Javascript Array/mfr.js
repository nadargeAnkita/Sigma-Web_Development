let arr = [1, 3, 5, 7, 11];
let newArr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
    
}
console.log(newArr)
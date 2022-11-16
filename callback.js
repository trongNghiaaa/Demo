var arr = [ 1,2,3,0.5,5,6,0.7,8,9]


// var result = arr.filter((value)=>{
//     return value >1
// })

// function myFilter(array, callback){
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if((callback(array[i]) === true)){
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }

// var result = myFilter(arr, function(value){
//     return value > 1
// })
// console.log(result)


function mySort(array, callback){
    for (let i = 0; i < array.length; i++) {
       if((callback(array[i+1] , array[i])) < 0 ){
        let box = array[i]
        array[i] = array[i+1]
        array[i+1]= box
       }
    }
    return array
}
var total = mySort(arr, function(a,b){
    return a - b
})
console.log(total)
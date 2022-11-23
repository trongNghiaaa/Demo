//var arr = [ 1,2,3,5,6,9]

// a, filter()
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

//b, Sort()
// function mySort(array, callback){
//     for (let i = 0; i < array.length; i++) {
//        if((callback(array[i+1] , array[i])) < 0 ){
//         let box = array[i]
//         array[i] = array[i+1]
//         array[i+1]= box
//        }
//     }
//     return array
// }
// var total = mySort(arr, function(a,b){
//     return a - b
// })
// // console.log(total)


// //c, Every()
// // obj = [{
// //     status: 'yes',
// //    },
// // {
// //     status: 'no',
// //    },
// // {
// //     status: 'yes',
// //    },
// // {
// //     status: 'yes',
// //    }
// // ]
var array = [2, 4, 6, 8, 1]

function myEvery(array, callback) {
    let check = true
    for (let i = 0; i < array.length; i++) {
        if ((callback(array[i])) === true) {
            check = true
        } else if ((callback(array[i])) === false) {
            check = false
            break
        }
    }
    return check
}

// var result = myEvery(obj, function(value){
//     return value.status  === 'yes'
// })
// console.log(result)




// function search(array, callback, condition){

// }


// var total = search(iphone, function(value){

// }, )
// setInterval(()=>{
//     console.log(1)
// },1000)
for (let i = 1; i > 0; i++) {
    console.log(i)

}
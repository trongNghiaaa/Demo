var arr2 = { a: 1, b: 2, c: 3, d: 4 }
//      for (var key in arr2) {
//          console.log(`${key} : ${arr2[key]}`)}


//Bài 0 : Vòng lặp cơ bản 
// let arr = [1, 4, 5, 2, 7, 9, 4]
//     function number (a, b) {
//         return a - b;
//  }
 
//   console.log(arr.sort(number)) 

//  let arr = [1, 4, 5, 2, 7, 9, 4];

// arr.sort((a, b) => b - a);

//  console.log(arr);


// Bài 1: ckhackHang = [1,5,7,8,9,15,8]
// in ra các số chẵn của mảng
// in ra các số lẻ của mảng
// in ra các số lớn hơn hoặc bằng 5 của mảng
//  Cộng tổng các số chia hết c5 của mảng
// Tìm ra tích 3 số đầu của mảng khackHang
// Tính tổng 3 phần tử cuối của mảng
// Tìm xem trong khackHang có phần tử nào là số 5 không?
// Đếm số phần tử = 8 trong mảng
// var khackHang = [1, 5, 7, 8, 9, 15, 8];
// var count = 0;
//  for(i = 0 ; i < khackHang.length ; i++){
//     if()
//     count += 1
//  }
//  console.log(count)
// Tìm số chẫn trong arr và thêm vào arr2
//  var arr =  [3,2,4,5,1,8,7,9]
// var arr2 = []

// for(i = 0 ; i < arr.length ; i++){
//     if( arr[i] % 2 === 0 ){
//         arr2[arr2.length] = arr[i] 
//     } 
// }
// console.log(arr2)
//Tính tích các số chẵn 
// var arr = [3,2,4,1,8,7,1,10,1,2]

// var tich = 1
// for(let i = 0 ; i < arr.length ; i++){
//     if( arr[i] % 2 === 0 ){
//         tich *= arr[i]
//     }
// }
// console.log(tich)
// var salary = [
//     {
//       ten: "Anh",
//       luong: 1000,
//     },
  
//     {
//       ten: "Duy",
//       luong: 8000,
//     },
  
//     {
//       ten: "Thái",
//       luong: 5000,
//     },
//   ];
// //   var sum = 0
// for(let i= 0; i < salary.length ; i++){
//     sum += salary[i].luong
// }
// console.log(sum) 

// Bài 0 : Sắp xếp to nhỏ dần
// hoán vị
// var arr = [1, 4, 5, 2, 7, 9, 4]
// // 1,2,5,4,7,9,4
// var count = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if(arr[i] <  arr[j]) {
//             var box = arr[i]
//             arr[i] = arr[j]
//             arr[j] = box
//         }  
//     }  
// }
// console.log(arr);

// Bài 1: 
//let khackHang = [1,5,7,8,9,15,8];


// let result = 0;
// for(let i = khackHang.length - 1 ; i > 3 ; i--){
//         result += khackHang[i]
// }
// let count8 = 0;
// for(let i = 0 ; i < khackHang.length ; i++){
//     if(khackHang[i] === 8 ){
//         count8++;
//     }
// }

// console.log(count8)    

//Bài 4: C1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
//Nếu number là số chẵn , In ra "Even number" và "Done".Ngược lại, in "Done" ra màn hình.
// let n = 2
// let check = (n % 2 ===0) ? "Even number" : "Done"
// console.log(check)

//Bài 3: 
// var data = [3,2,4,'5',1,8,7,'9']
// //b) tạo ra khackHang 2 chứa các phần tử có giá trị lẻ của data
// var arr2 = [];
// var arr3 = []

// for (let i = 0; i < data.length; i++) {
//     if(data[i] % 2 !== 0){
//         arr2[arr2.length] = data[i]
//     }
// }
// console.log(arr2)
 //c) đưa vào arr3 phần tử data đảo ngược
//  for(let i = data.length - 1 ; i >= 0 ; i-- ){
//     arr3[arr3.length] = data[i]
// }
// console.log(arr3)


//Hàm

// var a = 2;
// var b = 4;
// function sum(x, y) {
//    return x + y
// }

// console.log(sum(a, b))

// function checkEven(a) {
//         if(a % 2 === 0){
//             return true;  
//         }else{
//             return false
//         }
// }
// console.log(checkEven(4))   

// var khackHang1 = [1,2,3,4,5,6]
//  function reverse(khackHang) {
//     var newArray = [];
//     for (let i = khackHang1.length - 1 ; i >= 0; i--) {
//         newArray[newArray.length] = khackHang1[i]           
//     }
//     return newArray
//  }
//  console.log(reverse(khackHang1))    

// Bài 5: Viết function có đầu vào là 1 string
// 	function trả ra string mới sau khi đã loại bỏ khoảng trống thừa ở đầu và ở cuối string
// 	ví dụ:
// string = ‘     hello mọi người     ‘  => newString = ‘hello mọi người'

//  var str = '     hello mọi người     '
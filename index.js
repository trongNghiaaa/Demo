//Bài tập toán tử:


//Bài 1: Thực hiện các phép toán sau:
//(8 + "10" + "11" - "12" + "13" + "14" + 10);
//("1" + "2" + 3 - 4  + 5 * "6" + "7" + "8" + "9" + 10 * 0)
//console.log(8 + "10" + "11" - "12" + "13" + "14" + 10)
//console.log("1" + "2" + 3 - 4  + 5 * "6" + "7" + "8" + "9" + 10 * 0) 

//Bài 2: 
//var x = 2
//var a = 8 + x++ + ++x - --x + x++ + 7; 
//var b = 5 + ++x + ++x + --x - x-- - ++x  + 10;
//var c = 1 + x-- + --x - ++x + --x - 11;

//a = 8 + 2 + 4 - 3 + 3 + 7 = 21;
//b = 5 + 3 + 4 + 3 + 3 - 3 - 4 + 10 = 21;
//c = 1 + 4 + 2 - 3 + 2 - 11 = -9


//Bài 3:
 //var x = 5
 //var a = 5 + x++ + 10
 //var b = 5 + ++x +10
 //var c = 5 + x-- + 10
 //var d = 5 + --x +10

//a) a = 5 + 5 + 10 = 20 
//b) b = 5 + 6 + 10 = 21
//c) c = 5 + 5 + 10 = 20
//d) d = 5 + 4 + 10 = 19


//Bài 4: 
//var array = [1,6,8,7,6,9]
 //Array trên có bao nhiêu phần tử
 //Hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
 //Hãy thêm số 5 vào cuối array
 //Hãy thay đổi phần tử đầu và phần tử cuối thành số 10
 
 //array[array.length] = 5
 //array[0] = 10;
 //array[array.length - 1] = 10;
 //console.log(array)


 //Bài 5: var a = 10; var b = a++; var c = ++b; var d = --c; 
// a = 11
//b = 10
//c = 11
//d = 10

//Bài 6:Viết chương trình nhập vào giá trị cho chuỗi message.
//Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
//Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
//Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login

///var x = "Director"
//var result = (x = "Employee") ? "Hello" : (x = "Director") ? "Greetings" : "No login"

//console.log(x)

//Bài 7: Viết chương trình nhập vào giá trị cho a và b. Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below, ngược lại hiển thị Over. Lưu ý sử dụng toán tử ?
//var a = 2;
//var b = 2;
//var result = ((a + b) <= 4 ) ? "Below" : "Over"

//console.log(result)

//Bài 9: cho array = [3,5,4,9,8,1,10]
//hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
//hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20


// let arr = [3,5,4,9,8,1,10]
//console.log(arr[0] + arr[arr.length - 1])

//Bài tập toán tử nâng cao
///Bài 1: 
//var x = 8
//var a = 1 + x++ + 9
//var b = 7 + ++x + 3
//ar c = 5 + x-- + 10
//var d = 6 + --x + 11
//a,b,c d có giá trị là bao nhiêu ?

 //a = 1 + 8 + 9 = 18
 //b = 7 + 10 + 3 = 20
 //c = 5 + 10 + 10 = 25
 //d = 6 + 8 + 11 = 25
 //x = 8 

// Bài 2: Khai báo a ; b ;c  là  số đo 3 cạnh của  tam giác  ABC ..  
///tính chu vi của tam giác   
//Kiểm tra xem ABC có phải tam giác đều không . 
//console.log để in ra kết quả . 
//Trường hợp ABC là tam giác đều  . Tính diện tích của Tam giác ABC .
 
// let a = 3;
// let b = 3; 
// let c = 3;
//  let check = (a == b && b == c && c == a) ? "Tam giác đều" : "Tam giác thường"
//  console.log(check)
// console.log(a + b + c)
// console.log((a*(a**2-(a/2)**2))/2)

// Ví dụ:

// var x = 2;

// var number = ((x % 3) == 0 && (x % 5) == 0 ) ? "chia hết cho 3, 5" 
//             : ((x % 3) == 0 ) ? "chia hết cho 3" 
//             : ((x % 5) == 0) ? "chia hết cho 5" 
//             : "không chia hết"

// console.log(number)

// var arr2 = { a: 1, b: 2, c: 3, d: 4 }
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


// Bài 1: cho array = [1,5,7,8,9,15,8]
// in ra các số chẵn của mảng
// in ra các số lẻ của mảng
// in ra các số lớn hơn hoặc bằng 5 của mảng
//  Cộng tổng các số chia hết cho 5 của mảng
// Tìm ra tích 3 số đầu của mảng array
// Tính tổng 3 phần tử cuối của mảng
// Tìm xem trong array có phần tử nào là số 5 không?
// Đếm số phần tử = 8 trong mảng
// var array = [1, 5, 7, 8, 9, 15, 8];
// var count = 0;
//  for(i = 0 ; i < array.length ; i++){
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
//let array = [1,5,7,8,9,15,8];


// let result = 0;
// for(let i = array.length - 1 ; i > 3 ; i--){
//         result += array[i]
// }
// let count8 = 0;
// for(let i = 0 ; i < array.length ; i++){
//     if(array[i] === 8 ){
//         count8++;
//     }
// }

// console.log(count8)    

//Bài 4: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
//Nếu number là số chẵn , In ra "Even number" và "Done".Ngược lại, in "Done" ra màn hình.
// let n = 2
// let check = (n % 2 ===0) ? "Even number" : "Done"
// console.log(check)

//Bài 3: 
// var data = [3,2,4,'5',1,8,7,'9']
// //b) tạo ra array 2 chứa các phần tử có giá trị lẻ của data
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

// var array1 = [1,2,3,4,5,6]
//  function reverse(array) {
//     var newArray = [];
//     for (let i = array1.length - 1 ; i >= 0; i--) {
//         newArray[newArray.length] = array1[i]           
//     }
//     return newArray
//  }
//  console.log(reverse(array1))    

// Bài 5: Viết function có đầu vào là 1 string
// 	function trả ra string mới sau khi đã loại bỏ khoảng trống thừa ở đầu và ở cuối string
// 	ví dụ:
// string = ‘     hello mọi người     ‘  => newString = ‘hello mọi người’

//  var str = '     hello mọi người     '


// Bài 1: Viết function có đầu vào là 1 array chứa các số
// Function trả ra tổng các phần tử trong array
// Function trả ra tích các phần tử trong array
//let array = [5,9,10,4,6,2,4]
// // let sum = 0;
// // for (let i = 0; i < array.length; i++) {
   
// //      sum += array[i]
// // }console.log(sum)
//     sum = (arr) => {
//         let tich = 1
//         for(let i = 0; i < array.length ; i++) {
//             tich *= array[i]
//         }
//         return tich
//     }
//     console.log(sum(array))


// //2Bài 2: Viết function có đầu vào là 1 array chứa các số
// Function trả ra số lớn nhất trong array 
// Function trả ra số bé nhất trong array 

// findMax = () => {
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if(max < array[i])
//         max = array[i]
        
//     }
//     return max
// }
// console.log(findMax(array = [5,9,10,4,6,2,4]))
//Bài 3: Viết function có đầu vào là 1 array
//Function trả ra array mới với thứ tự ngược lại với array ban đầu

// reverseArray = () => {
//     let newArray = []
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray[newArray.length] = array[i]
        
//     }
//     return newArray
// }
// console.log(reverseArray(array = [5,9,10,4,6,2,4]))

// Bài 6: Viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới
// 	VD 20 05 2015 => 20-05-2015

// replace = (string) => {
//     let newString = ''
//     for (let i = 0; i < string.length; i++) {
//         if(string[i] === ' '){
//             string[i] = '-'
//             newString[newString.length] = string[i]
//         }
//     }
//     return newString
// }
// console.log(replace('20 05 2015'))

// Bài 7: Viết function có đầu vào là 1 array
// Function trả ra đoạn string chứa các giá trị bên trong array đầu vào



// reverseString = (array) => {
//     let newString = "";
//     for (let i = 0; i < array.length; i++) {
//         newString[newString.length] = array[i]  
//     }
//     return newString
// }
// console.log(reverseString([5,9,10,4,6,2,4]))


// Bài 8: Viết function có đầu vào là 1 array chứa các số
// 	Function trả ra số lớn nhất trong array  


// maxNumber = (array) => {
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > max){
//             max = array[i]
//         }  
//     }
//     return max
// }
// console.log(maxNumber([5,9,10,4,6,2,4]))

// Bài 9: Viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu


// reverseArray = (array) => {
//     let newArray = []
//     for (let i = array.length - 1; i >= 0 ; i--) {
//         newArray[newArray.length] = array[i]
        
//     }
//     return newArray;
// }
// console.log(reverseArray([5,9,10,4,6,2,4]))

// Bài 10: Viết function có đầu vào là số number và 1 array chứa số
// 	Function trả ra số lần number lặp lại trong array



// checkNumber = (number, array) => {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(number === array[i]){
//             count += 1
//         }
//     }
//     return count;
// }
// console.log( checkNumber(4, [5,9,10,4,6,2,4] ))

// Bài 12: 
var shop = [
	{id: 1, product:'Dày da', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Giày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 240},
    ] 
// ( price là giá ; store : số lượng còn lại ) 
// a ) Viết function tìm kiếm sản phẩm theo tên . Nếu không tìm thấy thì thì in ra “Không tìm thấy “ 
// b ) Viết function tính tổng số sản phẩm có trong shop.
// c ) Viết function tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop . 
// đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
// Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết SP bạn cần mua “ 
//a)
//  search = (Object) => {
//     let ten = 'Dày da'
//     for (let i = 0; i < shop.length; i++) {
//         if(shop[i].product === ten) {
//           return shop[i]
//         }else{
//             return "Không tìm thấy"  
//         }
            
//     }
// }
// console.log(search(shop))
//c)
// checkShop = (string, number) => {
//         for (let i = 0; i < shop.length; i++) {
//             let ten = 'Dép lào'
//             let conlai = shop[i].store - number
//             if(shop[i].product === ten){
//                 return (ten + conlai)
//             }else if(conlai <= 0){
//                 return "Shop đã hết SP bạn cần mua"
//             }  
//         }
// }
// console.log(checkShop('Dép lào', 10))

// Bài 14:

var sanPham = [
  {
        ten: "áo somi", gia: 100000,
    doanhSo: 100
  },
  {
    ten: "áo khoác", gia: 400000,
    doanhSo : 50
  },
  {
    ten: "áo phông", gia: 150000,
    doanhSo : 200
  },
];
 
// Hãy viết function để xử lý data trên 
// a, function trả về tên hàng hóa có danh số cao nhất trong shop
// b, function trả về tên hàng hóa có danh số thấp nhất trong shop
// c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban

//a) 
// findMax = (array) => {
//         let max = sanPham[0].doanhSo
//         for (let i = 0; i < sanPham.length; i++) {
//             if(max < sanPham[i].doanhSo) {
//                 max = sanPham[i].doanhSo
//                 return sanPham[i].ten
//             }
//         }     
// } 
// console.log(findMax(sanPham))
//c)
// sum = (array) => {
//     let tong = 0;
//     for (let i = 0; i < sanPham.length; i++) {
//        tong += (sanPham[i].doanhSo * sanPham[i].gia)
//     }return tong
// }

// console.log(sum(sanPham))
//console.log(100000*100 + 400000*50 + 150000*200)
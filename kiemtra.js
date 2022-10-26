//Bài 1: var x = 10;// Yêu cầu: Phân tích từng vị trí của x, tính a, b, c, x
 //a)var a = 8 + x++ + ++x - --x + x++ + 7 
//       a = 8 + 10 + 12 - 11 + 11 + 7 = 37 ; x = 12;
// b)var b = 5 + ++x + ++x + --x - x-- - ++x  + 10
//       b = 5 + 11 + 12 + 11 - 11 - 11 + 10 = 27 ; x= 11;
//c)  var c = 1 + x-- + --x - ++x + --x - 11
//        c = 1 + 10 + 8 - 9 + 8 - 11 = 7 ; x = 8; 


// Bài 2: var  array2 = [1,6,8,7,6,9]
//  Array trên có bao nhiêu phần tử
// Hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
// Hãy thêm số 5 vào cuối array
// Hãy thay đổi phần tử đầu và phần tử cuối thành số 10

//var  array2 = [1,6,8,7,6,9]
//a) 
// var count = 0;
// for(var i = 0 ; i < array2.length ; i ++ ){
//     count +=1
// }
// console.log(count)

//b) 
    //console.log(array2[0]) // Phần tử đầu tiên 
    //console.log(array2[array2.length -1]) // Phần tử cuối cùng
//c)array2[array2.length] = 5 
//d)
    //array2[0] = 10; // phần tử đầu
    //array2[array2.length-1] = 10 // PHẦN TỬ CUỐI
   
// Bài 3: Viết chương trình kiểm tra nhiệt độ sử dụng toán tử 3 ngôi:
// Nhỏ hơn 20 độ C thông báo tăng nhiệt độ.
// Lớn hơn 100 độ C thông báo giảm nhiệt độ
// Còn lại nhiệt độ đủ dùng.

// let temp = 120;
// let check = (temp < 20 ) ? "tăng nhiệt độ" : (temp > 100) ? "giảm nhiệt độ" : "nhiệt độ đủ dùng"
// console.log(check)

// Bài 4: 
    var array4 = [5,2,5,"2",8,"0", 1,3,10,"1","7"]
// numberArr là mảng chứa các số, stringArr là mảng chứ các chuỗi
// Tình tổng các phần tử trong numberArr
// In ra các phần tử trong array4 trừ số 1
// In ra các số chẳn trong array4
// In ra các số dạng chuỗi là số lẻ

//a)
    // var numberArr = []
    // var stringArr = []
     
    // for (let i = 0; i < array4.length; i++) {
    //     if(typeof(array4[i]) === "number"){
    //         numberArr[numberArr.length] = array4[i]
    //     }else if(
    //         typeof(array4[i]) === "string"){
    //             stringArr[stringArr.length] = array4[i]
    //         }
    // }
    // console.log(numberArr)
    // console.log(stringArr)
//b)
//     for (let i = 0; i < array4.length; i++) {
//         if(array4[i] == 1){
//             continue;
//     }
//     console.log(array4[i])
//  }
//c) 
// for (let i = 0; i < array4.length; i++) {
//     if(array4[i] % 2 === 0){
//         console.log(array4[i])
//     }  
// }
//d)
//  for (let i = 0; i < array4.length; i++) {
//     if((typeof(array4[i]) === "string" ) &&  array4[i] % 2 !==0){
//                 console.log(array4[i])
//     }
    
//  }

// // Bài 5: 
           var array5 = [3,2,4,1,8,7,1,10,1,2]
// // Sắp xếp các phần tử theo thứ tự tăng dần và giảm dần
// // Tìm số lớn nhất trong array5
// // Tìm số nhỏ nhất trong array5


//a) nhỏ đến lớn
// for(let i = 0 ; i < array5.length ; i++){
//     for (let j = i + 1 ; j < array5.length; j++) {
//         if(array5[i] > array5[j]){
//             var box = array5[i]
//             array5[i] = array5[j]
//             array5[j] = box
//         }    
//     }
// }
// console.log(array5[array5.length - 1]) // số lớn nhất
//b) lớn đến nhỏ 
// for(let i = 0 ; i < array5.length ; i++){
//          for (let j = i + 1 ; j < array5.length; j++) {
//              if(array5[i] < array5[j]){
//                  var box = array5[i]
//                  array5[i] = array5[j]
//                  array5[j] = box
//         }
//       }
//     }
//     console.log(array5[array5.length - 1])// số nhỏ nhất

// Bài 6: 
// var sanPham = [
// {ten :"Túi xách",gia:10000,soLuong:100},
// {ten :"dày",gia:15000,soLuong:30},
// {ten :"Dép",gia:12000,soLuong:30},
// {ten :"Ví",gia:101000,soLuong:20}
// ];


// Tính tổng số lượng các sản phẩm trên  . 
// Xếp các sản phẩm theo giá tăng dần . 
// Sử dụng vòng lặp để tìm sản phẩm có giá là 101000 đ . (In ra tên giá và số lượng)
// Sử dụng vòng lặp để tìm sản phẩm theo tên người dùng nhập vào  

//a)
// var sum = 0
// for(let i = 0 ; i < sanPham.length ; i ++){
//     sum += sanPham[i].soLuong
// }
// console.log(sum)

//b) 
// for(let i = 0 ; i < sanPham.length ; i++){
//          for (let j = i + 1 ; j < sanPham.length; j++) {
//              if(sanPham[i].gia < sanPham[j].gia ){
//                  var box = sanPham[i]
//                  sanPham[i] = sanPham[j]
//                  sanPham[j] = box
//              }    
//         }
//      }
//       console.log(sanPham)

//c)
    // for(let i = 0 ; i < sanPham.length ; i++){
    //     if(sanPham[i].gia === 101000){
    //         console.log(sanPham[i])
    //     } 
    // }
//d)
//  var nhap = "Dép"
//  for (let i = 0; i < sanPham.length; i++) {
//      if(sanPham[i].ten === nhap){
//          console.log(sanPham[i])
//      }   
//  }
 


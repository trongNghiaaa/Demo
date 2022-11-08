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
//var khackHang = [1,6,8,7,6,9]
 //Array trên có bao nhiêu phần tử
 //Hãy in ra phần tử đầu tiên và phần tử cuối cùng trong khackHang
 //Hãy thêm số 5 vào cuối khackHang
 //Hãy thay đổi phần tử đầu và phần tử cuối thành số 10
 
 //khackHang[khackHang.length] = 5
 //khackHang[0] = 10;
 //khackHang[khackHang.length - 1] = 10;
 //console.log(khackHang)


 //Bài 5: var a = 10; var b = a++; var c = ++b; var d = --c; 
// a = 11
//b = 10
//c = 11
//d = 10
//Bài 6:Viết chương trình nhập vào giá trị cchuỗi message.
//Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
//Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
//Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login

///var x = "Director"
//var result = (x = "Employee") ? "Hello" : (x = "Director") ? "Greetings" : "No login"

//console.log(x)

//Bài 7: Viết chương trình nhập vào giá trị ca và b. Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below, ngược lại hiển thị Over. Lưu ý sử dụng toán tử ?
//var a = 2;
//var b = 2;
//var result = ((a + b) <= 4 ) ? "Below" : "Over"

//console.log(result)

//Bài 9: ckhackHang = [3,5,4,9,8,1,10]
//hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
//hãy thêm số 20 vào cuối khackHang trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20


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

// var number = ((x % 3) == 0 && (x % 5) == 0 ) ? "chia hết c3, 5" 
//             : ((x % 3) == 0 ) ? "chia hết c3" 
//             : ((x % 5) == 0) ? "chia hết c5" 
//             : "không chia hết"

// console.log(number)


//

//


// Bài 1: Viết function có đầu vào là 1 khackHang chứa các số
// Function trả ra tổng các phần tử trong khackHang
// Function trả ra tích các phần tử trong khackHang
//let khackHang = [5,9,10,4,6,2,4]
// // let sum = 0;
// // for (let i = 0; i < khackHang.length; i++) {
   
// //      sum += khackHang[i]
// // }console.log(sum)
//     sum = (arr) => {
//         let tich = 1
//         for(let i = 0; i < khackHang.length ; i++) {
//             tich *= khackHang[i]
//         }
//         return tich
//     }
//     console.log(sum(khackHang))


// //2Bài 2: Viết function có đầu vào là 1 khackHang chứa các số
// Function trả ra số lớn nhất trong khackHang 
// Function trả ra số bé nhất trong khackHang 

// findMax = () => {
//     let max = khackHang[0]
//     for (let i = 0; i < khackHang.length; i++) {
//         if(max < khackHang[i])
//         max = khackHang[i]
        
//     }
//     return max
// }
// console.log(findMax(khackHang = [5,9,10,4,6,2,4]))
//Bài 3: Viết function có đầu vào là 1 khackHang
//Function trả ra khackHang mới với thứ tự ngược lại với khackHang ban đầu

// reverseArray = () => {
//     let newArray = []
//     for (let i = khackHang.length - 1; i >= 0; i--) {
//         newArray[newArray.length] = khackHang[i]
        
//     }
//     return newArray
// }
// console.log(reverseArray(khackHang = [5,9,10,4,6,2,4]))

// Bài 6: Viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới
// 	VD 20 05 2015 => 20-05-2015

// replace = (string) => {
//     let newString = ''
//     for (let i = 0; i < string.length; i++) {
//         if(string[i] === ' '){
//             newString += '-'   
//         }else{
//           newString += string[i]
//         }
//     }
//     return newString
// }
// console.log(replace('20 05 2015'))

// Bài 7: Viết function có đầu vào là 1 khackHang
// Function trả ra đoạn string chứa các giá trị bên trong khackHang đầu vào



// reverseString = (khackHang) => {
//     let newString = "";
//     for (let i = 0; i < khackHang.length; i++) {
//         newString[newString.length] = khackHang[i]  
//     }
//     return newString
// }
// console.log(reverseString([5,9,10,4,6,2,4]))


// Bài 8: Viết function có đầu vào là 1 khackHang chứa các số
// 	Function trả ra số lớn nhất trong khackHang  


// maxNumber = (khackHang) => {
//     let max = khackHang[0]
//     for (let i = 0; i < khackHang.length; i++) {
//         if(khackHang[i] > max){
//             max = khackHang[i]
//         }  
//     }
//     return max
// }
// console.log(maxNumber([5,9,10,4,6,2,4]))

// Bài 9: Viết function có đầu vào là 1 khackHang
// 	Function trả ra khackHang mới với thứ tự ngược lại với khackHang ban đầu


// reverseArray = (khackHang) => {
//     let newArray = []
//     for (let i = khackHang.length - 1; i >= 0 ; i--) {
//         newArray[newArray.length] = khackHang[i]
        
//     }
//     return newArray;
// }
// console.log(reverseArray([5,9,10,4,6,2,4]))

// Bài 10: Viết function có đầu vào là số number và 1 khackHang chứa số
// 	Function trả ra số lần number lặp lại trong khackHang



// checkNumber = (number, khackHang) => {
//     let count = 0;
//     for (let i = 0; i < khackHang.length; i++) {
//         if(number === khackHang[i]){
//             count += 1
//         }
//     }
//     return count;
// }
// console.log( checkNumber(4, [5,9,10,4,6,2,4] ))

// Bài 12: 
// var shop = [
// 	{id: 1, product:'Dày da', price: 259000, store: 100},
// 	{id: 2, product: 'Dép lào', price: 129000, store: 230},
// 	{id: 3, product: 'Giày cao gót', price: 749000, store: 130},
// 	{id: 4, product: 'Dép tông', price: 499000, store: 240},
//     ] 
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
// checkShop = (productName, number) => {
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

// var sanPham = [
//   {
//         ten: "áo somi", gia: 100000,
//     doanhSo: 100
//   },
//   {
//     ten: "áo khoác", gia: 400000,
//     doanhSo : 50
//   },
//   {
//     ten: "áo phông", gia: 150000,
//     doanhSo : 200
//   },
// ];
 
// Hãy viết function để xử lý data trên 
// a, function trả về tên hàng hóa có danh số cao nhất trong shop
// b, function trả về tên hàng hóa có danh số thấp nhất trong shop
// c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban

//a) 
// findMax = (khackHang) => {
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
// sum = (khackHang) => {
//     let tong = 0;
//     for (let i = 0; i < sanPham.length; i++) {
//        tong += (sanPham[i].doanhSo * sanPham[i].gia)
//     }return tong
// }

// console.log(sum(sanPham))
//console.log(100000*100 + 400000*50 + 150000*200)


// Bài 1: 
// var data = [
//     {username: 'thanhTung', password: 'tung1234'},
//     {username: 'tranganh', password: 'trang1234'},
// ]
// Hãy viết function đăng ký tài khoản
// function có đầu vào là username và password
// nếu username khác rỗng, password >= 8 ký tự thì thêm vào data

// Viết function đăng nhập có đầu vào là username và password
// nếu username, password khớp với data thì thông báo thành công
// nếu sai username thì báo sai username
// nếu sai password thì báo sai password 

// Viết function changePass có đầu vào là username, password, newPass
// nếu username, password khớp với data thì đổi password thành newPass
// nếu sai username thì báo sai username
// nếu sai password thì báo sai password


// let login = (username , password) => {
//     for (let i = 0; i < data.length; i++) {
//       if(username === data[i].username && password === data[i].password){
//         return ` Thành công`
//       }else if(username === data[i].username && password !== data[i].password){
//         return `Sai Password`
//       }else if(username !== data[i].username && password === data[i].password){
//         return `Sai username`
//       }
//     }
// }
// console.log(login( 'thanhTung', 'djvbodsjvnlkds'))
// let changePass =(username, password, newPass) => {
//    for (let i = 0; i < data.length; i++) {
//     if(username === data[i].username && password === data[i].password){
//         data[i].password = newPass;
//         return
//     }else if(username === data[i].username && password !== data[i].password){
//         return `Sai Password`
//     }else if(username !== data[i].username && password === data[i].password){
//         return `Sai username`
//     } 
//    }
// }
// console.log(changePass('thanhTung', 'tung1234', 'abcdefgh'))

// Bài 2:
// var orderData = [
 
//    { id: 1, listProduct: [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]}, 
//     { id: 2, listProduct: [ {idSP: 1, buy: 1}, {idSP: 2, buy: 1}]},]
// var productData = [
//     {idSP: 1, price: 500000, store: 100}, 
//     {idSP: 2, price: 300000, store: 200},
//     {idSP: 3, price: 200000, store: 300},
// ]
// var income = 0


//  hãy update lại store của shop
// hãy thêm tổng tiền ctừng order 
//     // { id: 1, listProduct: [...], total: ...}
// Bài 4: 
// var TFT= [
// { name:'yasuo', price: 5, toc:[‘Độc hành',”Anh em”]},
// { name:'yone', price: 5, toc:[‘Độc hành',”Anh em”]},
// { name:'lux', price: 7, toc:[‘Học giả',”Tối thượng”]},
// { name:'Braum', price: 4, toc:[‘Vệ sĩ',”Băng đảng”]},
// { name:'cho'gat', price: 3, toc:[‘Khổng lồ',”Đột biến”]},
// { name:'Galio', price: 5, toc:[‘Khổng lồ',”vệ sĩ”]},
// { name:'Ahri', price: 4, toc:[‘Pháp sư',”Băng đảng”]},
// { name:'Diana', price: 1, toc:[‘Băng đảng',”Sát thủ”]},
// ]
// Viết function tìm tướng theo Tên . Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
// Viết function theo giá tiền .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
// Viết function tìm kiếm tướng theo tộc . “ Không tìm thấy in ra không tìm thấy  “ 

// Bài  8:
var khachHang = [
    {ten:'nguyen van nam', gioiTinh: 'nam', diemTichLuy: 125, dichVuDangKy: 'A'},
    {ten:'dao linh huong', gioiTinh: 'nu', diemTichLuy: 170, dichVuDangKy: 'B'},
    {ten:'le dinh hieu', gioiTinh: 'nam', diemTichLuy: 115, dichVuDangKy: 'C'},
    {ten:'nguyen tien dat', gioiTinh: 'nam', diemTichLuy: 75, dichVuDangKy: 'B'},
    {ten:'nguyen van quy', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'A'},
    {ten:'tran ngoc diep', gioiTinh: 'nu', diemTichLuy: 105, dichVuDangKy: 'B'},
    {ten:'lai the anh', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'C'},
    {ten:'tran thi ngoc tram', gioiTinh: 'nu', diemTichLuy: 65, dichVuDangKy: 'C'},
]

var dichVu = [
    {ten: 'A', khuyenMai: 0.2, giaTri:250},
    {ten: 'B', khuyenMai: 0.18, giaTri:210},
    {ten: 'C', khuyenMai: 0.15, giaTri:200},
]

var hangHoa = [
	{id: 1, product:'P1 ', price: 259000, store: 100},	
	{id: 2, product: 'P1', price: 129000, store: 230},
	{id: 3, product: 'O2', price: 749000, store: 130},
	{id: 4, product: 'O6', price: 499000, store: 240},
] 
// Viết function in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP với điều kiện điểm tích lũy lớn hơn 100 . .
// Viết function in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký .
// Viết function in ra danh sách các khách hàng nam .
// Viết function in ra danh sách các khách hàng nữ .
// Viết function tính giá sản phẩm theo từng khách hàng .  Nếu số lượng người dùng cần mua quá số lượng 
//còn trong kho in ra “ Trong kho không đủ sản phẩm , vui lòng mua ít hơn “ . 
// Ví dụ :  Nguyễn Văn A  , đăng ký dịch vụ A ( khuyến mãi = 20%) và mua sản phẩm O2 với 
//số lượng 10 cái . thì giá là 749000*10 -( 749000*10 )*0.2.

//a.
// function registerVip(diemTichLuy) {
//     var ten = []
//     for (let i = 0; i < khachHang.length; i++) {
//        if(khachHang[i].diemTichLuy > diemTichLuy  ) {
//             ten[ten.length] = khachHang[i]
//        }          
//     }
//     return ten
// }
// console.log(registerVip(150))
//b,
//  let check = (dichvu) => {
//     let ten = []
//     for (let i = 0; i < khachHang.length; i++) {
//         if(khachHang[i].dichVuDangKy === dichvu){
//                 ten[ten.length] = khachHang[i]
//             } 
//     }return ten 
//  }

// console.log(check('A'))

//c,
//  let checkSex = (sex) => {
//         let ten = []
//         for (let i = 0; i < khachHang.length; i++) {
//             if(khachHang[i].gioiTinh === sex) {
//                 ten[ten.length] = khachHang[i]
//             }  
//         }
//         return ten
//  }
// console.log(checkSex('nam'))

//d,
// let tinhTien = (name, product, cost) => {
//     let dichvu =""
//     let giaKuyenMai = 0
//     let giatien = 0
//     for (let i = 0; i < khachHang.length; i++) {
//         if(name === khachHang[i].ten){
//             dichvu = khachHang[i].dichVuDangKy
//         }
//         for (let j = 0; j < dichVu.length; j++) {
//             if(dichvu === dichVu[i].ten){
//                 giaKuyenMai = dichVu[i].khuyenMai
//             }        
//         }
//     for (let k = 0; k < hangHoa.length; k++) {
//         if(product === hangHoa[k].product){
//             if(number < hangHoa[k].store){
//                 giatien = (number*hangHoa[k].price) - (number*hangHoa[k].price - giaKuyenMai)
//             }else{
//                 return "Không đủ"
//             }
//         }
//     }
        
//     }
//     return giatien
// }

//e,
// let tinhTien = (name,product,number,idea) => {
//     let dichvu = ''
//     let giakhuyenmai = 0
//     let giatien = 0
//     let diemtichluy = 0
//     for (let i = 0; i < khachHang.length; i++) {
//         if(name === khachHang[i].ten){
//             dichvu = khachHang[i].dichVuDangKy
//             diemtichluy = khachHang[i].diemTichLuy
//         }
//         console.log(dichvu)
//         for (let j = 0; j < dichVu.length; j++) {
//             if( dichvu === dichVu[j].ten){
//                 giakhuyenmai = dichVu[j].khuyenMai
//             } 
//         }  
//     }console.log(dichvu)
//     console.log(giakhuyenmai)
//     for (let k = 0; k < hangHoa.length; k++) {
//         if(product === hangHoa[k].product){
//             if(idea === "yes") {
//                 giatien = (number*hangHoa[k].price) - (number*hangHoa[k].price * giakhuyenmai) - diemtichluy*10000   
//             }else if(idea === "no"){
//                 giatien = (number*hangHoa[k].price) - (number*hangHoa[k].price * giakhuyenmai)
//             }
//         }    
//     }
//     console.log(dichvu)
// return giatien
// }
// console.log(tinhTien('nguyen tien dat','O2', 10,"no"))


// Bài 2:
// var orderData = [
 
//    { id: 1,listProduct: [ {idSP: 1, buy: 2}, {idSP: 2,buy: 1}]}, 
//     { id: 2, listProduct: [ {idSP: 1, buy: 1}, {idSP: 2, buy: 1}]},
// ]

// var productData = [
//     {idSP: 1, price: 500000, store: 100}, 
//     {idSP: 2, price: 300000, store: 200},
//     {idSP: 3, price: 200000, store: 300},
// ]
// var income = 0


//  hãy update lại store của shop
// hãy thêm tổng tiền ctừng order 
//     // { id: 1, listProduct: [...], total: ...}

// c, hãy viết function có đầu vào là array danh sách các đơn hàng và array danh sách hàng hóa 
//     function trả về tổng doanh thu của shop dựa trên đầu vào 
//a,
// 
//b,
    // for (let i = 0; i < orderData.length; i++) {
    //     let total = 0;
    //     for (let j = 0; j < orderData[i].listProduct.length; j++) {
             
    //         for (let k = 0; k < productData.length; k++) {
              
    //             if(productData[k].idSP === orderData[i].listProduct[j].idSP ){
    //                 total += orderData[i].listProduct[j].buy*productData[k].price   
    //             }   
    //         }
    //     } 
    //     orderData[i].total = total
    // }
    // console.log(orderData)
    
    
//  }
// console.log(updateStrore())


    // let idSP1 = 0;
    // let idSP2 = 0;
    // let newStore = 0;
    // let data = []
    // for (let i = 0; i < orderData.length; i++) {
    //     idSP1 += orderData[i].listProduct[0].buy
    //     idSP2 += orderData[i].listProduct[1].buy    
    //     if(orderData[i].listProduct[i].idSP === productData[i].idSP){
    //         newStore = productData[i].store - orderData[i].listProduct[i].buy
    //     }
        
    // }
    // console.log(data)

    //Bài 3: 
// var  iphone = [
// {id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
// {id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
// {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
// {id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230,color:'black'},
// {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
// {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
// {id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
// {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
// {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
// ] 
// // Viết function tìm sản phẩm tìm kiếm sản phẩm theo tên . nếu không tìm thấy thì in ra “ Không tìm thấy “
// // Viết function tìm kiếm sản phẩm theo tên và theo màu .   nếu không tìm thấy thì in ra “ không tìm thấy  “ .
// // Viết function tìm kiếm sản phẩm theo khoảng giá .10-15tr , 
// // Ví dụ người dùng tìm kiếm sản phẩm từ 10 đến 15 tr thì in ra các sản phẩm từ 10 đến 15 tr ..
// //a, 
// // function searchName(name) {
// //     for (let i = 0; i < iphone.length; i++) {
// //         if(name === iphone[i].product){
// //             return iphone[i]
// //         } 
// //     }
// //     return "Không tìm thấy"
// // }
// // console.log(searchName('iphone 15'))
// //c, 
// //  let searchIphone = (price) => {
// //     for (let i = 0 ; i < iphone.length; i++){     
// //         if(price >= 10 && price <= 15 ) {
// //             return iphone[i]
// //         }
// //     }
// //     return "Khonong có"
// //  }
// //  console.log(searchIphone(12))

// // Bài 1: Viết function có đầu vào là 1 array chứa các số
// // Function trả ra tổng các phần tử trong array


// var array = [1,2,3,4,5]
// //var newArray = []
// for (let i = 0; i < array.length; i++) {
//     if(array[i] >= 4){
//         console.log(array[i])
//     }
// }
// array.forEach(element => {
    
// });



// Bài 1: 
    var bienLai = [
    { ten: "an", giaTri: 300 },
    { ten: "binh", giaTri: 180 },
    { ten: "hoang", giaTri: 170 },
    { ten: "van", giaTri: 100 },
    { ten: "lam", giaTri: 200 },
    { ten: "thinh", giaTri: 210 },
    { ten: "diep", giaTri: 100 },
    { ten: "huong", giaTri: 100 },
  ];
//   a. Tìm những người có giá trị biên lai hớn hơn 200.
//   b. Tìm thứ tự mua hàng của người tên "lam". 
//   c. Xuất ra những người có biên lai bằng nhau
//   d. Những người có biên lai hơn 200 thì thêm {rank:"Vip"}, còn lại thì thêm {rank:"normal"}
//   e. Sắp xếp danh sách giảm dần theo giá trị biên lai.
  

//a,
// let result = bienLai.filter(function(giaTri){
//     return (giaTri.giaTri > 200)
// })


// console.log(result)
//b,
// let result = bienLai.findIndex(function(ten){
//     return (ten.ten === "lam")
// })
// console.log(result)
//c)
// Bài 7: 
//var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
//var array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
//var array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];
 //Viết function Tính tổng, tích, giá trị trung bình cộng của cả 3 array
// Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1 với tích phần tử từ đầu đến vị trí có giá trị là 5 xuất hiện lần 2 của array2
// Viết function Tính tích, tính tổng của các phần tử từ vị trí số 2 xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4 của cả 3 array . 
//Bài 9 :
// var tenKhach = [
//     {ten: 'nguyen the su', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'S'}, 
//     {ten: 'ngo van khoai', gioBay: '9:30', diemDen: 'Ha Noi', veKhoang: 'A'}, 
//     {ten: 'tau dau hu', gioBay: '10:15', diemDen: 'Hai Phong', veKhoang: 'B'}, 
//     {ten: 'chuyen lua gat', gioBay: '13:30', diemDen: 'Nha Trang', veKhoang: 'C'}, 
//     {ten: 'le quan quy', gioBay: '14:30', diemDen: 'TP.HCM', veKhoang: 'A'}, 
//     {ten: 'hoang hao hoa', gioBay: '11:30', diemDen: 'Nam Dinh', veKhoang: 'B'}, 
// ]

// var choNgoi = [
//     {ten: 'Ghe hang king', mave:'S'},
//     {ten: 'Ghe hang thuong gia', mave:'A'},
//     {ten: 'Ghe hang pho thong', mave:'B'},
//     {ten: 'Ghe hang pho cap', mave:'C'},
// ]

// var chuyenBay = [
//     { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
//     { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
//     { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
//     { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
//     { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
// ]

// Viết function in ra thông tin của những người cùng giờ bay và cho thêm dữ kiện họ ngồi ghế gì, trên những chuyến bay nào .
// Hãy in ra thông tin chi tiết của người bay vào 9h30 và có cả dữ liệu họ ngồi ghế ghì, trên những chuyến bay nào . => a	
// Viết function tìm theo tên hành khách và in ra chuyến bay của họ ..
//a,

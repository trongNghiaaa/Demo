//Bài 8:

// var hocSinh = [
// {name:'Thai', age: 15,maSV:'A1001A',diemthi:{toan:8,van:7,anh:9}},
// {name:'Kien', age: 10,maSV:'B1001D',diemthi:{toan:6,van:6,anh:9}},
// {name:'Linh', age: 12,maSV:'C1001C',diemthi:{toan:8,van:7,anh:7}},
// {name:'Tung', age: 11,maSV:'A1002B',diemthi:{toan:7,van:6,anh:9}},
// {name:'Thinh', age: 16,maSV:'B1002A',diemthi:{toan:5,van:7,anh:7}},
// {name:'Thuan', age: 13,maSV:'C1003C',diemthi:{toan:7,van:7,anh:7}},
// {name:'Hai', age: 13,maSV:'C1002B',diemthi:{toan:8,van:7,anh:6}},
// ]

// var lop =[
// {name:'A1', loai:'Lớp chọn'},
// {name:'B1', loai:'Loại B'},
// {name:'C1', Loai:'Loại C'},
// ]
// var khoiThi = [
// {name:'A', diem:22,heso:{toan:2,van:1,anh:1}},
// {name:'B', diem:25,heso:{toan:1,van:2,anh:1}},
// {name:'C', diem:21,heso:{toan:1,van:1,anh:2}},
// ]


// Ví dụ  maSV: A1001A 
// A1 là tên lớp . 
// 001 là thứ tự của học sinh 
// A là khối thi. . 

// a ) Lọc các học sinh theo lớp  .  
// b ) Lọc các học sinh theo Khối thi  .
// c ) Tính tổng điểm của các học sinh .  cho biết học sinh đó đỗ hay trượt 

// let ten = "nguyễn văn nam";
// let newName = ten.split()
// //console.log(ten)
// let Name = newName.map((value)=>{
//     value = value[0].toUpperCase() + value.slice(1, value.length)
//     return value
// }).join(" ")
// console.log(Name)

// var data = [
//     { name: "nguyen van thai", age: 11 },
//     { name: "hoang manh kien", age: 10 },
//     { name: "pham thuy linh", age: 12 },
//     { name: " nguyen ngoc tung", age: 11 },
//     { name: "vu quang thinh", age: 17 },
//     { name: "nguyen minh thuan", age: 13 },
//     { name: "nguyen van thai", age: 15 },
//     { name: "hoang manh Kien", age: 10 },
//     { name: "Pham thuy linh", age: 12 },
//     { name: "vu ngoc tung", age: 11 },
//     { name: "le quang thinh", age: 13 },
//     { name: "nguyen minh thuan", age: 13 },
//     { name: "nguyen van thai", age: 15 },
//     { name: "hoang manh Kien", age: 10 },
//     { name: "hoang thuy linh", age: 12 },
//     { name: "nguyen ngoc tung", age: 11 },
//     { name: "le quang thinh", age: 16 },
//     { name: "chu minh thuan", age: 13 },
//   ];
//   // Viết hoa các chữ cái đầu
// let newArr = data.map((value)=>{
//     let newName = ""
//     newName = value.name.split(" ")
//     value.name = newName
//     let ten = value.name.map((value2)=>{
//     value2 = value2[0].toUpperCase() + value2.slice(1, value2.length)
//     return value2
// })

//     value.name = ten.join("")
//     return value
// })

// console.log(newArr)
////////////////////////////////////////////
// let newArr = data.map((value)=>{
//   let newName = ''
//   newName = value.name.split(" ")
//   value.name = newName
//   let name = value.name.map((value2)=>{
//           value2 = value2[0].toUpperCase() + value2.slice(1, value2.length)
//           return value2
//   })
//   value.name = name.join("")
//   return value
// })
// console.log(newArr)


//Bài 0: 
//var str = 'Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng . Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”.'


// Hãy đổi các 'em' thành 'EM'
// let newStr = str.replace("em", "EM")
  
// console.log(newStr)

// Đoạn văn trên có bao nhiêu ký tự
//console.log(str.length)
// Lấy ra câu “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng’’. đưa về mảng chứ từng ký tự.
//str.indexOf("đáng lẽ Bé Còi nhà ta phải là con trai mới đúng")
//str.lastIndexOf("đáng lẽ Bé Còi nhà ta phải là con trai mới đúng")
//  let newStr = str.slice(182,232)
// console.log(newStr)
// kiểm tra xem đoạn văn trên bắt đầu bằng “Hôm”. Nếu đúng thay thế thành “Ngày”
//Bài 8:

// var hocSinh = [
// {name:'Thai', age: 15,maSV:'A1001A',diemthi:{toan:8,van:7,anh:9}},
// {name:'Kien', age: 10,maSV:'B1001D',diemthi:{toan:6,van:6,anh:9}},
// {name:'Linh', age: 12,maSV:'C1001C',diemthi:{toan:8,van:7,anh:7}},
// {name:'Tung', age: 11,maSV:'A1002B',diemthi:{toan:7,van:6,anh:9}},
// {name:'Thinh', age: 16,maSV:'B1002A',diemthi:{toan:5,van:7,anh:1}},
// {name:'Thuan', age: 13,maSV:'C1003C',diemthi:{toan:7,van:7,anh:7}},
// {name:'Hai', age: 13,maSV:'C1002B',diemthi:{toan:8,van:7,anh:6}},
// ]

// var lop =[
// {name:'A1', loai:'Lớp chọn'},
// {name:'B1', loai:'Loại B'},
// {name:'C1', Loai:'Loại C'},
// ]
// var khoiThi = [
// {name:'A', diem:22,heso:{toan:2,van:1,anh:1}},
// {name:'B', diem:25,heso:{toan:1,van:2,anh:1}},
// {name:'C', diem:21,heso:{toan:1,van:1,anh:2}},
// ]


// // Ví dụ  maSV: A1001A 
// // A1 là tên lớp . 
// // 001 là thứ tự của học sinh 
// // A là khối thi. . 
// // a ) Lọc các học sinh theo lớp  

// //console.log(hocSinh[0].maSV.startsWith("A1"))
//     let tenHocSinh ="Hai"
//     let tongDiem = 0
//     hocSinh.forEach((value)=>{
//         let khoi = ""
//         let diem = 0
//         if(tenHocSinh === value.name){
//             khoi = value.maSV
//             diem = value.diemthi
//         }
//         khoiThi.forEach((value2)=>{
//             if(value2.name === khoi[khoi.length - 1]){
//                 tongDiem = diem.toan*value2.heso.toan+diem.van*value2.heso.van+diem.anh*value2.heso.anh
//             }
//         })   
//     })
//     let ketQua =""
// khoiThi.forEach((value3)=>{    
//         if(tongDiem >= value3.diem){
//                 ketQua = "đỗ"              
//         }else {
//                 ketQua ="trượt"
//         }
// })

// console.log(tongDiem)
// console.log(ketQua)
// console.log(searchStudent("A1"))

// b ) Lọc các học sinh theo Khối thi  .
// c ) Tính tổng điểm của các học sinh .  cho biết học sinh đó đỗ hay trượt 
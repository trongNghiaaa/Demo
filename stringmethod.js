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

var data = [
    { name: "nguyen van thai", age: 11 },
    { name: "hoang manh kien", age: 10 },
    { name: "pham thuy linh", age: 12 },
    { name: " nguyen ngoc tung", age: 11 },
    { name: "vu quang thinh", age: 17 },
    { name: "nguyen minh thuan", age: 13 },
    { name: "nguyen van thai", age: 15 },
    { name: "hoang manh Kien", age: 10 },
    { name: "Pham thuy linh", age: 12 },
    { name: "vu ngoc tung", age: 11 },
    { name: "le quang thinh", age: 13 },
    { name: "nguyen minh thuan", age: 13 },
    { name: "nguyen van thai", age: 15 },
    { name: "hoang manh Kien", age: 10 },
    { name: "hoang thuy linh", age: 12 },
    { name: "nguyen ngoc tung", age: 11 },
    { name: "le quang thinh", age: 16 },
    { name: "chu minh thuan", age: 13 },
  ];
  // Viết hoa các chữ cái đầu
//   let newData = []
//   data.forEach((value)=>{
//     newData.push(value.name)
//   })
//console.log(newData)
let newArr = data.map((value)=>{
    let newName = ""
    newName = value.name.split(" ")
    value.name = newName
    let name = value.name.map((value2)=>{
       value2 = value2[0].toUpperCase() + value2.slice(1, value2.length)
        return value2
    })

    value.name = name.join(" ")
    return value
})

console.log(newArr)
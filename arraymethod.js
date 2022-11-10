//CƠ BẢN
//Bài 1:
var data2 = [1,1,3,4,4,5,6,7,9]
//a. Thêm số 8 vào cuối array data2 .      .push()
// data2.push(8) 
// console.log(data2)

// b.  Thêm số 10 vào cuối array data2
// c. Thêm số 5 vào đầu  array data2 .      .unshift()
//   data2.unshift(5)
//   console.log(data2)

// d. Đổi phần tử có vị trí là 5 thành số  11 .         .splice(3 giá trị)
        // data2.splice(5, 0 , 11)
        // console.log(data2)

// e. Xóa phần tử vị trí  thứ 4 và thêm 2 số 5 và 7 vào data2 .  
        // data2.splice(4, 1, 5, 7 )
        // console.log(data2)
        

// Bài 2 : 
// var  data03 = ["Cam","Xoài","Mít","Bưởi","Quýt","Dưa gang"]
// //         a ) Copy array data03. Bằng  … 
// //         b )  Sửa phần tử "Dưa gang" thành "Dưa hấu" 
//                 data03.splice(data03.length - 1 , 1, "Dưa hấu")
//                 console.log(data03)

//         c ) Thêm "mận" vào giữa data03 . 

//         d ) Thêm "Dứa" vào đầu của data03 và "Chanh"  vào cuối data03 . 
//.Bài 3 :
// const persons = [
//   {firstname : "Đào", lastname: "Văn Anh"},
//   {firstname : "Trần", lastname: "Huy"},
//   {firstname : "Lê", lastname: "Hoàng"}
// ]; 	
// // a ) Tạo ra một array persons mới . (newPersons)
// //  Thêm {firstname : "Điền họ của bạn…", lastname: "Điền họ của ban …."} vào cuối Array newPersons.
//         let newPerson = persons.map((value) => {
//                 return value;
//         })

//         // let newPerson = []
//         // for (let i = 0; i < persons.length; i++) {
//         //        newPerson[newPerson.length] = persons[i]    
//         // }
//          newPerson.push({firstname : "Vũ", lastname : "Nghĩa"})
//          //console.log(newPerson)


// b)Xóa {firstname : "Trần", lastname: "Huy"}, và Đổi thành  {firstname : "Nguyễn", lastname: "Hoàng"}.
        //newPerson.splice(1, 1, {firstname : "Nguyễn", lastname: "Hoàng"})


// c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPerson 

        // newPerson.map((item,index) => {
        //         newPerson[index].address = "Hà Nội"
        //         return item;
        // })
        // console.log(newPerson)
//Bài 4: 
//var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
// viết function có đầu vào là 1 arr return tổng các number và string number trong array
// var total =0;   

// var newArr = arr2.filter((value) => {
//         return (value*1)
// }).map((value) => {
//         return value*1
// })

// newArr.forEach((value) => {
//         total += value
// })
// console.log(total)
//Bài 5:
//  var list1 = [3,6,7,9,5]
// var list2 = [3,5,7,8,6,6,7]
// // // // viết function có đầu vào là 2 array và return tổng 2 array đầu vào
// let newArr =list1.concat(list2)
// // let total = 0
// // newArr.forEach((value)=>{
// //         total += value
// // })
// //         console.log(total)           

// // // viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần
// newArr.sort((a,b)=>{
//         return a - b
// })
// console.log(newArr)

//Bài 6: 
// var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// // viết function có đầu vào là array và return ra array mới chứa các phần tử của array đầu vào không lặp lại
// let newData = data.filter((value, index)=>{
//        return data.indexOf(value) === index
// })
// console.log(newData)

// Bài 7: cho  
       //let array = [1,5,7,8,9,15] //sử dụng map hoặc filter
//  in ra các số chẵn trong mảng
     
       
//  in ra các số lẻ  trong mảng
// in ra các số lớn hơn hoặc bằng 5 trong mảng
// in ra các số chia hết cho 5 trong mảng
//  Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// let newArr = array.filter((value)=>{
//         return value > 5 
// }).map((value)=>{
//         return value + 1
// })
// 
// dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
        // let newArr = array.slice(2, array.length)
        // console.log(newArr)

// .splice để xóa 1 phần tử trong mảng
// .push thêm 1 phần tử vào cuối mảng 

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]


// var  hoaQua = [
// 	{ten:"Xoài",sx:"China",sl:"100"},
// 	{ten:"Xoài",sx:"VietNam",sl:"130"},
// 	{ten:"Xoài",sx:"ThaiLan",sl:"100"},
// 	{ten:"Cam",sx:"China",sl:"200"},
// {ten:"Cam",sx:"ThaiLan",sl:"150"},
// {ten:"Nho",sx:"VietNam",sl:"120"},
// {ten:"Xoài",sx:"ThaiLan",sl:"100"},
// ]
// Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 
// Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
// Viết function lọc sản phẩm hoa quả  theo tên  .  
// Viết function lọc sản phẩm hoa quả  theo Nước .  
// Viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước . 

// let tinhSoLuong = (fruit) =>{
//         let sum = 0
//         let newArr = hoaQua.filter((value)=>{
//                 return value.ten === fruit
//         })
//         newArr.forEach((value)=>{
//                 sum += value.sl*1
//         })
//         return sum
// }
// console.log(tinhSoLuong("Xoài"))


//Nâng Cao
//Bài 1: 
//         var bienLai = [
//         { ten: "an", giaTri: 300 },
//         { ten: "binh", giaTri: 180 },
//         { ten: "hoang", giaTri: 170 },
//         { ten: "van", giaTri: 100 },
//         { ten: "lam", giaTri: 200 },
//         { ten: "thinh", giaTri: 210 },
//         { ten: "diep", giaTri: 100 },
//         { ten: "huong", giaTri: 100 },
//       ];
// //       a. Tìm những người có giá trị biên lai hớn hơn 200.
// //       b. Tìm thứ tự mua hàng của người tên "lam". 
// //       c. Xuất ra những người có biên lai bằng nhau
// //       d. Những người có biên lai hơn 200 thì thêm {rank:"Vip"}, còn lại thì thêm {rank:"normal"}
// let result = bienLai.map((value)=>{
//         if(value.giaTri > 200){
//                 value.rank = "Vip"
//         }else{
//                 value.rank = "Normal"
//         }
//         return value
// })


//       e. Sắp xếp danh sách giảm dần theo giá trị biên lai.

// var all = [
//         {name: 'huy', score: 10, class: 'A'},
//         {name: 'hai', score: 7, class: 'B'},
//         {name: 'hung', score: 8, class: 'A'},
//         {name: 'kien', score: 6, class: 'A'},
//         {name: 'vinh', score: 9, class: 'B'},
//         {name: 'binh', score: 8, class: 'B'},
//         {name: 'cuong', score: 5, class: 'B'},
//         {name: 'chien', score: 6, class: 'A'},
//         {name: 'minh', score: 7, class: 'B'},
//       ]
       
//       var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']
// //a, tạo ra arrayA chỉ chứa obiect các học sinh lớp A    
//  let arrayA = all.filter((value)=>{
//         if(value.class === 'A' ){
//                 return value
//         }
//  })

// //b,  tạo ra array chỉ chứa obiect điểm từ 6 trở xuống
// let array6 = all.filter((value)=>{
//         if(value.score <= 6){
//                 return value
//         }
// })
// //console.log(array6)
// //c, tạo ra arrayVip chỉ chứa obiect học viên tham gia đội tuyển

// let arrayVip = []
//  all.forEach((value1)=>{
//        doiTuyen.forEach((value2)=>{
//                 if(value1.name === value2){
//                         arrayVip.push(value1)
//                 }
//        })
// })
// console.log(arrayVip)

//bài 2: 
// let array3 = [1,2,3,4,5,2,3,1,6,3,7]
// // //a,
// // let newArr = array3.filter((value, index)=>{
// //         return array3.indexOf(value) === index
// // })
// // console.log(newArr)
// //b,in ra các phần tử lặp lại bao nhiêu lần
// var output = {}
// //console.log(output[1] == undefined);
// array3.forEach(function(value) {
//     if(output[value] == undefined){
//         output[value] = [value]
//     }else{
//         output[value].push(value)
//     }
// })
// //console.log(output);
// for(let x in output){
//     console.log(`số ${x} xuất hiện${output[x].length}`);
// }

// Bài 14: Cho 
//var arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 
// Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xếp theo thứ tự tăng dần .
// let arr1 = []
// let arr2 = []
// arr.forEach((value)=>{
//         if(typeof value === "string"){
//                 arr1.push(value)
//         }else if(typeof value === "number"){
//                 arr2.push(value)
//         }
// })
// console.log(arr1)
// console.log(arr2)
// Hãy tính tổng của các giá trị number và các string number trong arr
// let total = 0;
// let newArr = arr.filter((value)=>{
//         return value*1
// }).map((value)=>{
//         return value*1
// })
//console.log(sum)
// newArr.forEach((value)=>{
//         total += value
// })
// console.log(total)
// Hãy sắp xếp arr trên theo thứ tự tăng dần.
//         let check = newArr.sort((a,b)=>{
//                 return a - b
//         })
// console.log(check)
// Hãy lấy các giá trị có thuộc tính là number từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không . 
//Bài 3: 
// var hoaQua = [
//         { ten: 'Xoài', sx: 'China', sl: '100' },
//         { ten: 'Xoài', sx: 'VietNam', sl: '130' },
//         { ten: 'Xoài', sx: 'ThaiLan', sl: '100' },
//         { ten: 'Cam', sx: 'China', sl: '200' },
//         { ten: 'Cam', sx: 'ThaiLan', sl: '150' },
//         { ten: 'Nho', sx: 'VietNam', sl: '120' },
//         { ten: 'Xoài', sx: 'ThaiLan', sl: '100' }
//     ];
// //     a. In ra vị trí "xoài" ở mảng trên.
// //     b. Sắp xếp các hóa quả theo số lượng.
// let newArr = hoaQua.sort((a, b)=>{
//         return a.sl - b.sl
// })
//console.log(newArr)

//     c. Từ câu b, lấy ra vị trí của hoa của có số lượng lớn nhất
//     d. Tìm vị trí của hoa quả có số lượng 400

//Bài 4:
var hocSinh=[
{ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
{ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
{ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
]

var khoiThi = [
{khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:20},
{khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:22},
{khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
]

// hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
// let tongDiem = 0
// let tenHocSinh = 'tung'
// hocSinh.forEach((value)=>{
//         let tenKhoi = ""
//         let diemThi = {}
//         if(tenHocSinh === value.ten){
//                 tenKhoi = value.khoi
//                 diemThi = value.diem
//         }
//         khoiThi.forEach((value2)=>{
//                 if(tenKhoi === value2.khoi){
//                         tongDiem = diemThi.toan*value2.heSo.toan+diemThi.van*value2.heSo.van+diemThi.anh*value2.heSo.anh
//                 }
//         })
// })
// let ketQua =""
// khoiThi.forEach((value3)=>{    
//         if(tongDiem >= value3.diemSan){
//                 ketQua = "đỗ"              
//         }else {
//                 ketQua ="trượt"
//         }
// })
// console.log(tongDiem)
// console.log(`Học sinh ${tenHocSinh} đã thi ${ketQua}`)
// // console.log(tongDiem)


// hệ số sẽ thay đổi theo kh ối thi và môn thi
// hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
// hãy cho biết ai thi đỗ, ai thi trượt
// Bài 7:
// cho array persons 
[{
	name: "Trung",
	class: "Nodemy01",
	dateJoin: "052-0-2020",
age: 20
}, {
	name: "Phong",
class: "Nodemy01",
dateJoin: "06-01-2020",
age: 19
}, {
	name: "Nam",
class: "Nodemy02",
dateJoin: "25-01-2020",
age: 20
}]

// dùng .sort  để sắp xếp mảng object có tuổi tăng dần
// dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
// dùng .filter để tìm ra những học viện tham gia trước tháng 2
// dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
// 	gợi ý : dùng toUppercase để viết hoa


    
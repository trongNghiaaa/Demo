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
       let array = [1,5,7,8,9,15] //sử dụng map hoặc filter
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


var  hoaQua = [
	{ten:"Xoài",sx:"China",sl:"100"},
	{ten:"Xoài",sx:"VietNam",sl:"130"},
	{ten:"Xoài",sx:"ThaiLan",sl:"100"},
	{ten:"Cam",sx:"China",sl:"200"},
{ten:"Cam",sx:"ThaiLan",sl:"150"},
{ten:"Nho",sx:"VietNam",sl:"120"},
{ten:"Xoài",sx:"ThaiLan",sl:"100"},
]
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
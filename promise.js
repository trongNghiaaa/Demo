// Promise có 2 trạng thái: + pending: đang trong quá trình xử lý
//                          + fullfill: đã có kết quả
//                                    - resolve : thành công
//                                    - reject : thất bại
//                      Resolve() và Reject() phải được gọi trong callback thì mới đến trạng thái Fullfill và mới có thể .then() hoặc .catch()
//                      nếu không gọi Resolve() hoặc Reject() thì mãi mãi Pending
//Tác dụng : chuyển xử lý bất đồng bộ callback=> xử lí bằng promise

//Tạo luôn 1 hàm promise fullfill với hàm Promise.resolve(), Promise.reject ()
// cách tạo 1 Promise :
//          new Promise((resolve, reject)=>{            (lúc khởi tạo này là hàm đồng bộ)

//})
// .then(data=>{})
// .catch(error=>{})
//.then() hoặc .catch() đều tạo ra 1 Promise mới         (lúc này là hàm bất đồng bộ)
// Khi vào hàng chờ thì Promise() được ưu tiên hơn setTimeOut(), setInTerVal()





// // // Bài 3 :
// // // promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// // // 	promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// // // 	promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// // // 	in ra màn hình true hoặc false.

// var calculate = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(2)
//     }, 1000)
// })
//     .then((data) => {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res(data * 3)
//             }, 1000)
//         })
//     })
//     .then((data2) => {
//         return new Promise((res, rej) => {
//             if (data2 > 10) {
//                 res(true)
//             } else (
//                 res(false)
//             )
//         })
//     })
//     .then((result) => {
//         console.log(result)
//     })

setTimeout(() => {
    console.log(5);
});
new Promise((res, rej) => {
    setTimeout(() => {
        console.log(3);
        res();
    });
}).then((data) => {
    console.log(4);
});

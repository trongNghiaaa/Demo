// // Bài 3 :  

// // promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// // 	promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// // 	promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// // 	in ra màn hình true hoặc false. 

var calculate = new Promise((res, rej) => {
    setTimeout(() => {
        res(2)
    }, 1000)
})
    .then((data) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(data * 3)
            }, 1000)
        })
    })
    .then((data2) => {
        return new Promise((res, rej) => {
            if (data2 > 10) {
                res(true)
            } else (
                res(false)
            )
        })
    })
    .then((result) => {
        console.log(result)
    })



// var p = document.querySelector('.para');
// var count = 0;
// p.addEventListener('click', function () {
//     count++;
//     if (count % 2 === 0) {
//         p.setAttribute('style', 'color : blue');
//     } else if (count % 2 !== 0) {
//         p.setAttribute('style', 'color : red');
//     }
// });

// var number1 = document.querySelector('.number1');
// var number2 = document.querySelector('.number2');
// var result = document.querySelector('.para');
// var plusBtn = document.querySelector('.btn1');
// var minusBtn = document.querySelector('.btn2');
// plusBtn.addEventListener('click', function () {
//     result.innerHTML = parseInt(number1.value) + parseInt(number2.value);
// });
// minusBtn.addEventListener('click', function () {
//     result.innerHTML = parseInt(number1.value) - parseInt(number2.value);
// });
///Bài 1:
// var number = document.querySelector('.text');
// var check = document.querySelector('.btn');
// var result = document.querySelector('.para');

// check.addEventListener('click', function () {
//     if (parseInt(number.value) % 2 === 0) {
//         result.innerHTML = `${number.value} là số chẵn`;
//     } else {
//         result.innerHTML = `${number.value} là số lẻ`;
//     }
// })

// BÀi 2
// var button = document.querySelector('.btn');
// var text = document.querySelector('.para');
// var count = 0;

// button.addEventListener('click', () => {
//     count++;
//     if (count % 2 !== 0) {
//         text.setAttribute('style', 'display : none');
//     } else {
//         text.setAttribute('style', 'display : block');
//     }
// });

// Bài 3: Bài 3: Giao diện có 2 nút nhấn và hình vuông,
//nhấn nút 1 hình vuông to lên gấp đôi, nhấn nút 2, hình vuông nhỏ
//gấp đôi
var gapdoi = document.querySelector('.btn1');
var chiadoi = document.querySelector('.btn2');
var result = document.querySelector('.box');

gapdoi.addEventListener('click', () => {
    result.setAttribute('style', 'width : 200px, height:200px,background: #red');
});
// Bài 4:Giao diện gồm một nút nhấn và 2 ô input,
//tính chỉ số BMI của mỗi người dựa vào chiều cao và cân nặng.
// Biết công thức: bmi = cân nặng / ( chiều cao ^ 2 )
//và các phần loại như sau:
// BMI <16: Gầy độ III
// 16 ≤ BMI < 17: Gầy độ II
// 17 ≤ BMI < 18.5: Gầy độ I
// 18.5 ≤ BMI < 25: Bình thường
// 25 ≤ BMI < 30: Thừa cân
// 30 ≤ BMI < 35: Béo phì độ 1
// 35 ≤ BMI < 40: Béo phì độ II
// BMI > 40: Béo phì độ III



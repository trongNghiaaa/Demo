//BÀi 1:
var time = [
    {
        name: "A",
        birth: '1-1-2022'
    },
    {
        name: "B",
        birth: '1-5-2022'
    }, {
        name: "C",
        birth: '30-1-2022'
    }, {
        name: "D",
        birth: '10-10-2022'
    }

]

// let newTime = time.sort((a,b)=>{
//     return new Date(a.birth) - new Date(b.birth)
// })
// console.log(newTime)

let newTime = time.map((value) => {
    let newBirth = value.birth.split("-").reverse().join("/")
    value.birth = newBirth
    return value
}).sort((a, b) => {
    return new Date(a.birth) - new Date(b.birth)
})
console.log(newTime)
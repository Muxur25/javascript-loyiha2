'use strict';


let salom = setTimeout(hello, 1000) // bu funksiya nechidur sekunddan keyin bizani funksiyani ishga tushuradi

function hello(){
    console.log("Salom dunyo")
}


let nima = setTimeout(() =>{
    console.log("Salom dunyo")
}, 2000)



clearInterval(salom) // bu funksiya tutib oladi va yoq qilasi
clearInterval(nima)




//
// let timeOut;
// let i = 0
//
//
//
let ii = document.querySelector('#btn')
//
// function qali(){
//     console.log("Set time out")
//     if (ii == 3){
//         clearInterval(timeOut)
//     }
// }
//
//
// ii.addEventListener('click', ()=> { // hodisa qoshdik va har bosganda
//     //timeOut = setTimeout(qali, 1000) // konsolga set time aut db yoz va bir sekuntan kryn
//     timeOut = setInterval(qali,1000) // buni tepadagidan farqi har 1 sekundda ozi aftomatik ishga tushadi
//     i++
// })












function myFuncsion(){
    let sel = document.querySelector('.car') // karni oldik
    let pos = 0 // bu kengligi
    let ahah = setInterval(frame, 10) // buni chundik


    function frame(){
        if (pos == 700){
            clearInterval(ahah)
        }else {
            pos++
            sel.style.left = pos +'px'
        }

    }


}

ii.addEventListener('click', myFuncsion)


















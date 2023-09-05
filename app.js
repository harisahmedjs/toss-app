const image=document.querySelector("img")
const para=document.querySelector('p')
const maths= Math.ceil(Math.random()*2)
console.log(maths)
function masjid() {
    if (maths==1) {
        image.src="./assets/masjid.jpg"
        para.innerHTML = "You Won The Toss"
    } else {
        image.src =""
        para.innerHTML = "You Loss The Toss"
    }
}
function chand() {
    if (maths==1) {
        image.src=""
        para.innerHTML = "You Loss The Toss"
    } else {
        image.src ="./assets/chand.jpg"
        para.innerHTML = "You Won The Toss"
    }
}

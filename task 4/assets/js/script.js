let btn = document.querySelector(".btn")
let p = document.querySelector("p")


function createRandomP() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    result = ""
    for(let i = 0; i < chars.length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
}

btn.addEventListener("click" , ()=>{
    p.innerText = createRandomP()
})
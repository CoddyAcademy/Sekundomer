"use stirct"
const count = document.querySelector(".count"),
        start = document.querySelector(".start"),
        end = document.querySelector(".end")

        let i = 0;

        
start.addEventListener("click", ()=>{
    count.style.color = "green"
    const timer = setInterval(()=>{
        i++
        count.textContent = `${i}`
    }, 1000)


    end.addEventListener("click", ()=>{
        count.style.color = "black"
        clearInterval(timer)
    })
})
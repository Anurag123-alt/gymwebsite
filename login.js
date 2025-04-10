


let sidebar=document.getElementById('sidebar')
let bar=document.getElementById('bar')

bar.addEventListener('click',()=>{
     sidebar.style.transform="translateX(0px)"

     



})


let close=document.getElementById('close')

close.addEventListener('click',()=>{
 sidebar.style.transform="translateX(-300px)"

})

let link=document.getElementById('link')

link.addEventListener('click',()=>{
     window.location="signup.html"
})

let join=document.getElementById('join')
join.addEventListener('click',()=>{
     window.location="signup.html"
})

let joinus=document.getElementById('joinus')
joinus.addEventListener('click',()=>{
     window.location="signup.html"
})
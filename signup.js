let body=document.body;
let nav=document.getElementById("nav")




window.addEventListener('scroll',()=>{

     if(window.scrollY > 100){
nav.style.background="black"  
        nav.style.borderBottom="1px solid #444"
     }

     else{
nav.style.background="transparent"  
nav.style.border="none"

     }
})

let sidebar=document.getElementById('sidebar')
let bar=document.getElementById('bar')

bar.addEventListener('click',()=>{
     sidebar.style.transform="translateX(0px)"

     



})


let close=document.getElementById('close')

close.addEventListener('click',()=>{
 sidebar.style.transform="translateX(-300px)"

})



let leftbtn=document.getElementById('leftstyle')
let rightbtn=document.getElementById('rightstyle')

let dots=document.querySelectorAll('.dot')
let link=document.getElementById('link')

link.addEventListener('click',()=>{
     window.location="login.html"
})


let join=document.getElementById('join')
join.addEventListener('click',()=>{
     window.location="signup.html"
})

let joinus=document.getElementById('joinus')
joinus.addEventListener('click',()=>{
     window.location="signup.html"
})
let cind=0;

dots[cind].style.background="#0c9723"
let trainer_box=document.getElementById('trainer-box')


leftbtn.addEventListener('click',()=>{

     dots.forEach((dot)=>{
          dot.style.background="#456"
     })
     cind++;

if(cind >= dots.length){
     cind=0
     
    
}
     dots[cind].style.background="#0c9723"

     trainer_box.scrollBy({
          left:300,behavior:"smooth"
     })
})



rightbtn.addEventListener('click',()=>{


     dots.forEach((dot)=>{
          dot.style.background="#456"
     })
     cind--;

     if(0 > cind){
     cind=dots.length -1
console.log(cind);

}

dots[cind].style.background="#0c9723"



     trainer_box.scrollBy({
          left:-300,behavior:"smooth"
     })
})



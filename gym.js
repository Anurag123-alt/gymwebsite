let body=document.body;
let nav=document.getElementById("nav")

window.addEventListener('scroll',()=>{
console.log(window.scrollY);

     if(window.scrollY > 80){
nav.style.background="black"  
        
     }

     else{
nav.style.background="transparent"  

     }
})

let sidebar=document.getElementById('sidebar')
let bar=document.getElementById('bar')

bar.addEventListener('click',()=>{
     sidebar.style.transform="translateX(0px)"

     console.log("a");
     



})


let close=document.getElementById('close')

close.addEventListener('click',()=>{
 sidebar.style.transform="translateX(-300px)"

})

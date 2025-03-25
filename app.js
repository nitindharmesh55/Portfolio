const Call = document.querySelector(".Call");
const Nitin = document.querySelector(".Nitin");

Call.addEventListener("click", () =>{
    Call.innerHTML = "purabiyaneetin@gmail.com";
    
    setTimeout(()=>{
        Call.innerHTML = "Call Me"
    },2000)
});
Nitin.addEventListener("click",()=>{
    Nitin.innerHTML= "Thank You!!";
})
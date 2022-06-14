$(document).ready(function(){
  $(".Review__list").slick({
    dots:true
});
});
document.addEventListener("DOMContentLoaded",()=>{
   let user_email=document.querySelector(".newsletter-user-email");
   let warning=document.querySelector(".email__warning")
   user_email.addEventListener("blur",()=>{
      var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      var valid = re.test(user_email.value);
      if(valid){
        warning.style.display="none";
        user_email.style.border=`1px solid rgba(0,0,0,0.02)`
      }
      else{
        warning.style.display="block";
        user_email.style.border=`2px solid rgb(232, 77, 77)`
      };
   })
   const burger_btn=document.querySelector(".burger__image");
   const burger_menu=document.querySelector(".burger-menu");
   const header=document.querySelector("header");
   burger_btn.addEventListener("click",()=>{
    burger_menu.classList.toggle("open");
    header.classList.toggle("hide__color");
    document.body.classList.toggle("slide_prevent")
   })
});
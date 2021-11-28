const  days = document.querySelectorAll('.day')
const  daysWrapper = document.querySelector('.content__days')
function openClose(el) {

 if(el.target.tagName === 'DIV') {

     el = el.target;
  } else {
     el = el.target.parentElement;
  }
  el = el.parentElement;
  days.forEach(day => {
   
     if(el === day) {
        if(el.classList.contains("active")) {
         el.classList.remove("active");
         return;
        } else {
         el.classList.add("active");
        }
     }
     if(day !== el && day.classList.contains("active")) {
      day.classList.remove("active");
     }
  });
  
  
};
//daysWrapper.addEventListener('click',openClose);
days.forEach(el => {
  el.addEventListener('click',openClose)
});

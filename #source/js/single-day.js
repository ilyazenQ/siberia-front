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

if(window.screen.width > 1024)
{
  new ScrollBooster({
  viewport: document.querySelector('.section-see'),
  content: document.querySelector('.section-see'),
 scrollMode: 'native',
  direction: 'horizontal'
 });
}
 let rightMoverArr = document.querySelectorAll('.calendar-move-right');
 let calendarBody = document.querySelector('.section-see');
 function scrollRight() {
   calendarBody.scrollLeft += 150;
   rightMoverArr.forEach(el => {
   let currentRight = parseInt(el.style.right);
   el.style.right = currentRight - 150 + 'px';
    
   
  });
}
rightMoverArr.forEach(el => {
  el.addEventListener('click',scrollRight)
 
});
calendarBody.addEventListener('scroll',scrollBody)
function scrollBody() {
//	console.log(calendarBody.scrollLeft);
 rightMoverArr.forEach(el => {
  let currentRight = parseInt(el.style.right);

  el.style.right += currentRight - 
  parseInt(calendarBody.scrollLeft,10) + 'px';
});
}

const  knowItems = document.querySelectorAll('.know-item')
const  knowWrapper = document.querySelector('.know-left')
function openCloseKnowItem(el) {

 if(el.target.tagName === 'DIV') {

     el = el.target;
  } else {
     el = el.target.parentElement;
  }
  el = el.parentElement;
  knowItems.forEach(day => {
   
     if(el === day) {
        if(el.classList.contains("active")) {
         el.classList.remove("active");
         return;
        } else {
         el.classList.add("active");
        }
     }
     
  });
  
  
};
knowItems.forEach(el => {
  el.addEventListener('click',openCloseKnowItem)
});
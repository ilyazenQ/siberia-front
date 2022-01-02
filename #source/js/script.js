// animate-on-scroll
let animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0 && window.screen.width < 800) {
   window.addEventListener('scroll',animOnScroll);
   function animOnScroll(param) {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 1;

         let animItemPiont = window.innerHeight - animItemHeight / animStart;

         if(animItemHeight > window.innerHeight) {
            let animItemPiont = window.innerHeight - window.innerHeight / animStart;
         }

         if((pageYOffset > animItemOffset - animItemPiont) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add("_animate");
         } else {
            animItem.classList.remove("_animate");
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return {top:rect.top + scrollTop, left:rect.left + screenLeft}
      }

      setTimeout(() => {
         animOnScroll()
      },1000);
   }
}
// calendar.js
let calendar = document.querySelectorAll('.calendar-body');
if(calendar.length > 0 && window.screen.width > 1024)
{
  new ScrollBooster({
  viewport: document.querySelector('.calendar-body'),
  content: document.querySelector('.calendar-body'),
 scrollMode: 'native',
  direction: 'horizontal'
 });

 let rightMoverArr = document.querySelectorAll('.calendar-move-right');
 let calendarBody = document.querySelector('.calendar-body');
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
}
// single-day.js
let isSingle = document.querySelectorAll('.content__days');

if(isSingle.length > 0) {
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
const swiperSingle = new Swiper('.swiper-single', {
   loop:true,
   spaceBetween: 50,
   centeredSlides: true,
   autoplay: {
     delay: 7000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 
 });
}

// slider-opt.js
let swiperCatalog = document.querySelectorAll('.swiper-catalog');
if(swiperCatalog.length > 0) {
const swiper = new Swiper('.swiper-catalog', {
   loop:true,
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   on: {
     init() {
       this.el.addEventListener('mouseenter', () => {
         this.autoplay.stop();
       });
 
       this.el.addEventListener('mouseleave', () => {
         this.autoplay.start();
       });
     }
   },
 });
}
 

 
 

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


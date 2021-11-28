if(window.screen.width > 1024)
{
  new ScrollBooster({
  viewport: document.querySelector('.calendar-body'),
  content: document.querySelector('.calendar-body'),
 scrollMode: 'native',
  direction: 'horizontal'
 });
}
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

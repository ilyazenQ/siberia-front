new ScrollBooster({
   viewport: document.querySelector('.calendar-body'),
   content: document.querySelector('.calendar-body'),
   scrollMode: 'native',
   direction: 'horizontal'
 });
 let rightMover = document.querySelector('.calendar-move-right');
 let calendarBody = document.querySelector('.calendar-body');
 function scrollRight() {
   calendarBody.scrollLeft += 150;
}
 rightMover.addEventListener('click',scrollRight)
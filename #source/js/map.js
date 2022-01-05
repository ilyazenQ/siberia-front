//let test = document.getElementById('test');

//test.addEventListener('click',(e) => {  
//  document.querySelector('.accordion-button').click();
//  document.querySelector('.accordion-button').focus();
//});

const accordionInMap = document.getElementById("accordionExample");
accordionInMap.addEventListener('click', function(e){
  if(window.screen.width <= 511) {
  accordionInMap.style.paddingBottom = "80px";
  }
}
);
const yakutiaLeft = document.querySelector(".yak-left");
const yakutuaMap = document.querySelector(".yakutia-map");
const mainMap = document.querySelector(".main-map");
yakutiaLeft.addEventListener('click',function (e) {
  mainMap.classList.toggle('hidden');
  yakutuaMap.classList.toggle('hidden');
});

//const compas = document.querySelector('.compas-svg'),
//compasKamchatka = document.querySelector('.kamchatka'),
//compasMongolia = document.querySelector('.mongolia'),
//compasArrow = document.querySelector('.compas-arrow');
//let deg = 0;
//function moveTheArrow(deg) {
//  compasArrow.style.transform = `rotate(${deg}deg)`;
//}
//setInterval(() => {
//  moveTheArrow(deg);
//  deg++;
//},40)

//compasMongolia.addEventListener('mouseenter', function(e){
  
 // compasArrow.classList.add('change-mongolia');
//  compasArrow.classList.remove('change-kamchatka');
 
//});


//compasKamchatka.addEventListener('mouseenter', function(e){
  
//  compasArrow.classList.add('change-kamchatka');
//  compasArrow.classList.remove('change-mongolia');
  
//});


     // transform-box: fill-box;
     // transform-origin:15% 79%;
      //transform:rotate(90deg);
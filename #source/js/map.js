//let test = document.getElementById('test');

//test.addEventListener('click',(e) => {  
//  document.querySelector('.accordion-button').click();
//  document.querySelector('.accordion-button').focus();
//});

const compas = document.querySelector('.compas-svg'),
compasKamchatka = document.querySelector('.kamchatka'),
compasMongolia = document.querySelector('.mongolia'),
compasArrow = document.querySelector('.compas-arrow');

compasMongolia.addEventListener('mouseenter', function(e){
  
  compasArrow.classList.add('change-mongolia');
  compasArrow.classList.remove('change-kamchatka');
 
});


compasKamchatka.addEventListener('mouseenter', function(e){
  
  compasArrow.classList.add('change-kamchatka');
  compasArrow.classList.remove('change-mongolia');
  
});


     // transform-box: fill-box;
     // transform-origin:15% 79%;
      //transform:rotate(90deg);
let test = document.getElementById('test');

test.addEventListener('click',(e) => {  
  document.querySelector('.accordion-button').click();
  document.querySelector('.accordion-button').focus();
});
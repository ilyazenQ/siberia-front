"use strict";let animItems=document.querySelectorAll(".anim-items");if(animItems.length>0&&window.screen.width<800){function e(t){for(let e=0;e<animItems.length;e++){const t=animItems[e],i=t.offsetHeight,o=n(t).top,s=1;let l=window.innerHeight-i/s;if(i>window.innerHeight){window.innerHeight,window.innerHeight}pageYOffset>o-l&&pageYOffset<o+i?t.classList.add("_animate"):t.classList.remove("_animate")}function n(e){const t=e.getBoundingClientRect(),n=(window.pageXOffset||document.documentElement.scrollLeft,window.pageYOffset||document.documentElement.scrollTop);return{top:t.top+n,left:t.left+screenLeft}}setTimeout((()=>{e()}),1e3)}window.addEventListener("scroll",e)}
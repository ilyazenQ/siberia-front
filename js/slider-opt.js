"use strict";const swiper=new Swiper(".swiper-catalog",{loop:!0,spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},on:{init(){this.el.addEventListener("mouseenter",(()=>{this.autoplay.stop()})),this.el.addEventListener("mouseleave",(()=>{this.autoplay.start()}))}}}),swiperSingle=new Swiper(".swiper-single",{loop:!0,spaceBetween:30,centeredSlides:!0,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}});
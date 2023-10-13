const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firsCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];


let isDragging = false, startX, startScrolleft;
let cardPerview = Math.round(carousel.offsetWidth / firsCardWidth);


carouselChildrens.slice(-cardPerview).reverse().forEach(card =>{
   carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});

carouselChildrens.slice(0, cardPerview).forEach(card => {
   carousel.insertAdjacentHTML("beforeend",card.outerHTML);
});




arrowBtns.forEach(btn =>{
btn.addEventListener("click", () =>{
    carousel.scrollLeft = btn.id === "left" ? -firsCardWidth : firsCardWidth;
})
});

const dragStart = (e) =>{
     isDragging = true;
     carousel.classList.add("dragging");
     startX = e.pageX;
     startScrolleft =  carousel.scrollLeft;
}

 const dragging = (e) => {
    if(!isDragging)return
    carousel.scrollLeft =  startScrolleft -(e.pageX - startX);
    
 }

 const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
 }

 const infiniteScroll = () => {
   if(carousel.scrollLeft === 0){

      carousel.classList.add("no-transition");
     carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
     carousel.classList.remove("no-transition");

   } 
   else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){

      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
   }
 }

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);


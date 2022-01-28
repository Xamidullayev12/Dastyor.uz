
// MANU BURGER

const burger = document.querySelector(".burger-icon").addEventListener("click", burgerActive)

function burgerActive() {

  let manu = document.querySelector(".nav-manu_container");
  manu.classList.toggle("nav-manu_container_active");
  console.log(manu);
}

// responsive manu 1024 -- 1100
 
const resBurger = document.querySelector(".nav-manu-icon").addEventListener("click", responsOpenBurger)

function responsOpenBurger() {
  let manu =document.querySelector(".main-sec-nav");
  manu.classList.add("main-sec-nav__active")
  console.log(manu);
}


//  MANU BURGER REMOVE CLASS

const navCloseBurger = document.querySelector(".nav-manu_close").addEventListener("click", responsCloseBurger) 

function responsCloseBurger() {
  let manu = document.querySelector(".main-sec-nav");
  manu.classList.remove("main-sec-nav__active")
}


//  NAV BUTTON  FOR MODAL

document.querySelector(".main-header-info-btn").addEventListener("click", modalActive)

function modalActive() {
  let modal_bg =  document.querySelector(".modal-bg");
  modal_bg.classList.toggle("modal-bg-active");

  let modal = document.querySelector(".modal")
  modal.classList.toggle("modal-active");
  
};


//  MODAL CLOSE 

document.querySelector(".modal__close").addEventListener("click" , modalClose)

function modalClose(params) {
  document.querySelector(".modal-bg").classList.remove("modal-bg-active") 
  document.querySelector(".modal").classList.remove("modal-active")
}




// ACCORDION 

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    let buttons = document.querySelectorAll(".accordion");
    buttons.forEach(button => {
      button.classList.remove("active")
    })

    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    let panels = document.querySelectorAll(".panel");

    panels.forEach(item => {
      item.style.display = "none";
    })

    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.transition = "0.4s"

    } else {
      panel.style.display = "block";
    }
  });
}






// INPUT MASK

var element = document.getElementById('footer_input_2');
var maskOptions = {
  mask: '+{998}(00)000-00-00'
};
var mask = IMask(element, maskOptions);        















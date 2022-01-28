










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
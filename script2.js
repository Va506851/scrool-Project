    // **********set year *************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

// **********closing tag*************

const listContainer = document.querySelector('.list-container');
const list = document.querySelector('.list');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click',function(){
const containerHeight = listContainer.getBoundingClientRect().height
console.log(containerHeight)
const listHeight = list.getBoundingClientRect().height;
console.log(listHeight)
if(containerHeight === 0){
    listContainer.style.height = `${listHeight}px`
}else{
    listContainer.style.height = 0;
}
})

// fixed-navbar


const navbar = document.querySelector('.nav');
const toplink = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
const scrollHeight = window.scrollY;
const navHeight = navbar.getBoundingClientRect().height;
if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
}else{
    navbar.classList.remove('fixed-nav')
} 
if(scrollHeight > 400){
    console.log('hello');
    toplink.classList.add('show-link')
}else{
    toplink.classList.remove('show-link')
}  
})

// **********scroll to top *************
  const scroollink = document.querySelectorAll('.scrool-link');
  scroollink.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
     const id = e.currentTarget.getAttribute('href').slice(1);
     const element = document.getElementById(id);
     
     const navbarHeight = navbar.getBoundingClientRect().height;
     const containerHeight =listContainer.getBoundingClientRect().height;
     const fixedNav = navbar.classList.contains("fixed-nav");
     let position = element.offsetTop - navbarHeight;
     if(!fixedNav){
        position = position - navbarHeight;
     }
     if(navbarHeight > 82){
        position = position + containerHeight;
     }
     window.scrollTo({
        left:0,
        top : position,
     })
     listContainer.style.height =0;
    })
  })
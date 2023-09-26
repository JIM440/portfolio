const navMenu = document.querySelector('.nav-menu')
const menuIcon = document.querySelector('.bx-menu')
const closeIcon = document.querySelector('.bx-x')
console.log(navMenu);
console.log(menuIcon);

menuIcon.addEventListener('click', () => {
    navMenu.classList.add('active')
})
closeIcon.addEventListener('click', ()=>{
    navMenu.classList.remove('active')
})

// 
const root = document.documentElement;
const moon = document.querySelector('.moon')
const body = document.querySelector('body')
const all = document.querySelectorAll('.btn-dark')
moon.addEventListener('click', ()=>{
    
if(body.classList.contains('dark')){
    root.style.setProperty('--white', 'white');
    root.style.setProperty('--color-black', 'black');
    root.style.setProperty('--muted', ' #524040');  
    moon.classList.replace('bx-sun', 'bxs-moon')
    body.classList.remove('dark') 
    all.forEach(dark =>{
        dark.classList.replace('btn-dark-mode', 'btn-dark')
    })
}
else{
    root.style.setProperty('--white', 'rgb(29, 29, 29)');
root.style.setProperty('--color-black', 'white');
root.style.setProperty('--muted', ' #999');
moon.classList.replace('bxs-moon', 'bx-sun')
body.classList.add('dark')
all.forEach(dark =>{
    dark.classList.replace('btn-dark', 'btn-dark-mode')
})
}
})

window.addEventListener('scroll', ()=>{
    navMenu.classList.remove('active')  
})

    // back to top
    const backTop = document.getElementById('back-top')
    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 200){
backTop.classList.add('active')
      }
      else{
        backTop.classList.remove('active')
      }
    })
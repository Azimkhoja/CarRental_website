 // getting  html elements
const theme = document.querySelector('#theme');
const cards = document.querySelectorAll('#dkmode')
const comnight = document.querySelectorAll('#comnight');

console.log(cards);
    //   header = document.querySelector('header');
console.log(theme);
      theme.addEventListener('click', (e) => {
          changeMode() 
      })
// changig the theme of the site
function changeMode() {
        let mood = localStorage.getItem('theme');
        if(mood == 'true'){
            document.body.style.cssText = "background-color: #1C1C1C; color: #fff"
            theme.innerHTML =  `<img src="./icons/sun.svg"/>`;
            theme.classList.add('bg-[#272727]');
            cards.forEach(item => item.classList.add('night'))
            comnight.forEach(item => item.classList.add('bg-[#272727]'));
            
            
            
            
            localStorage.setItem('theme', false);
          }
          else {
            document.body.style.cssText = "background-color: #fff; color: #000"
            theme.innerHTML = `<i class='bx bxs-moon text-[#555555] hover:text-[#000000]'></i>`
            theme.classList.remove('bg-[#272727]');
            cards.forEach(item => item.classList.remove('night'))
            comnight.forEach(item => item.classList.remove('bg-[#272727]'));
            localStorage.setItem('theme', true);    
          }
    }
    // changeMode()
    


    
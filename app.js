const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pageTransitios(){
    //butten click active class
    console.log('click');
    for(let i =0 ; i < sectBtn.length; i++ ){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            console.log('click');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
            console.log('click');
        })
    }

   

    // sctions active class
   allsections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
               section.classList.remove('active') 
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
}



pageTransitios();

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('menu')[0]
const menuItems = nav.getElementsByTagName('i');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active')
})

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
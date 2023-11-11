const  humburgur = document.getElementById('humburgur');
const navmenu    = document.getElementById('navmenu');
const mymune    = document.getElementById('mymune');
const closenav    = document.getElementById('closenav');

humburgur.addEventListener('click',()=>{
    navmenu.classList.remove('hidden');
    humburgur.classList.add('hidden');
});

closenav.addEventListener('click',()=>{
    navmenu.classList.add('hidden');
    humburgur.classList.remove('hidden');
});

closenav.addEventListener('click',()=>{
    mymune.classList.add('hidden');
    
});



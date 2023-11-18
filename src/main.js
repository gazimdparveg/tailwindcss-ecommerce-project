const  humburgur = document.getElementById('humburgur');
const navmenu    = document.getElementById('navmenu');
const mymune    = document.getElementById('mymune');
const closenav    = document.getElementById('closenav');
const meyshow = document.getElementById('meyshow');

humburgur.addEventListener('click',()=>{
    navmenu.classList.remove('hidden');
    humburgur.classList.add('hidden');
});

closenav.addEventListener('click',()=>{
    navmenu.classList.add('hidden');
    humburgur.classList.remove('hidden');
});


const tabs = document.querySelectorAll(".tab_cl ul li");

const all = document.querySelectorAll('.item_warp');
const food = document.querySelectorAll('.food');
const drink = document.querySelectorAll('.drink');
const Bavers = document.querySelectorAll('.Bavers');


tabs.forEach(tab =>{
    tab.addEventListener("click", () => {
        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabval = tab.getAttribute('data-tabs')
      
        all.forEach(item => {
            item.style.display = "none"
       })

       if(tabval == "food"){
        food.forEach(item => {
            item.style.display = 'block'
        })
       }else if (tabval == "drink"){
        drink.forEach(item => {
            item.style.display = 'block'
        })
       }else if (tabval == "Bavers"){
        Bavers.forEach(item => {
            item.style.display = 'block'
        })
       } else {
        all.forEach(item => {
            item.style.display = "block"
           })
       }


        
    } )




})





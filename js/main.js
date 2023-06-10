////////////////
// TABS STARTS
//////////////// 
const tabBtns = document.querySelectorAll('.exemples__list-item');
const tabItems = document.querySelectorAll('.tabs-exe__item');
document,addEventListener('click', function(e) {
    if(e.target.closest('.exemples__list-item')) {
        const currentBtn = e.target;
        if(!currentBtn.classList.contains('_active')) {
            tabBtns.forEach(btn => {
                btn.classList.remove('_active');
            });
            currentBtn.classList.add('_active');
            const dataAttribute = currentBtn.getAttribute('data-tab');
            tabItems.forEach(item => {
                if(item.classList.contains(dataAttribute)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        };
    };
});
////////////////
// TABS ENDS
//////////////// 

////////////////
// MENU STARTS
//////////////// 
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuOut = document.querySelector('.body-behind');
menuIcon.addEventListener('click', function(e) {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuOut.classList.toggle('_active');
});
document.body.addEventListener('click', function(e) {
    if(menuBody.classList.contains('_active')) {
        console.log(e.target)
        if(!e.target.closest('.menu')) {
            menuBody.classList.remove('_active');
            menuOut.classList.remove('_active');
            document.body.classList.remove('_lock'); 
            menuIcon.classList.remove('_active');
        };
    };
})
////////////////
// MENU ENDS
//////////////// 
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const menuItems = document.querySelectorAll('.menu-item');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const activeFilters = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            menuItems.forEach(item => {
                const itemType = Array.from(item.classList).find(cls => 
                    ['breakfast', 'lunch', 'dinner', 'desert', 'drinks'].includes(cls)
                );

                if (activeFilters.length === 0 || activeFilters.includes(itemType)) {
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                } else {
                    item.classList.add('hidden');
                    item.classList.remove('visible');
                }
            });
        });
    });
});

document.querySelector('.splashbtn').addEventListener('click', function(event) {
    event.preventDefault(); 


    document.querySelector('#target-menu').scrollIntoView({
        behavior: 'smooth' 
    });
});

document.querySelector('#menu').addEventListener('click', function(event) {
    event.preventDefault(); 


    document.querySelector('#target-menu').scrollIntoView({
        behavior: 'smooth' 
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const quickscroll = document.querySelector(".quickscroll");

    hamburger.addEventListener("click", () => {
        quickscroll.classList.toggle("open");
    });
});

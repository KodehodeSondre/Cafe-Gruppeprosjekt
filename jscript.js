document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const menuItems = document.querySelectorAll('.menu-item');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const activeFilters = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            menuItems.forEach(item => {
                const itemType = Array.from(item.classList).find(cls => ['breakfast', 'lunch', 'dinner'].includes(cls));
                if (activeFilters.length === 0 || activeFilters.includes(itemType)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

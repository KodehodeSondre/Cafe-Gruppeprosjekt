document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const menuItems = document.querySelectorAll('.menu-item');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const activeFilters = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            menuItems.forEach(item => {
                const itemType = Array.from(item.classList).find(cls => ['breakfast', 'lunch', 'dinner', 'desert', 'drinks'].includes(cls));

                if (activeFilters.length === 0 || activeFilters.includes(itemType)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
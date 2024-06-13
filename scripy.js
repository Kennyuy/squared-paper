document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const row = item.getAttribute('data-row');
            const col = item.getAttribute('data-col');

            gridContainer.style.gridTemplateColumns = getColumns(col);
            gridContainer.style.gridTemplateRows = getRows(row);
        });

        item.addEventListener('mouseout', () => {
            gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
            gridContainer.style.gridTemplateRows = 'repeat(3, 1fr)';
        });
    });

    function getColumns(col) {
        switch (col) {
            case '1':
                return '2fr 1fr 1fr';
            case '2':
                return '1fr 2fr 1fr';
            case '3':
                return '1fr 1fr 2fr';
            default:
                return '1fr 1fr 1fr';
        }
    }

    function getRows(row) {
        switch (row) {
            case '1':
                return '2fr 1fr 1fr';
            case '2':
                return '1fr 2fr 1fr';
            case '3':
                return '1fr 1fr 2fr';
            default:
                return '1fr 1fr 1fr';
        }
    }
});

const developments = document.querySelector('.developments');
const tabItems = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.tab-panel');

function showDevelopmentsPanel(index) {
    tabItems.forEach(item => item.classList.remove('active'));
    tabItems[index].classList.add('active');
    tabPanels.forEach(panel => panel.classList.remove('active'));
    tabPanels[index].classList.add('active');
}

tabItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        showDevelopmentsPanel(index);
    });
});

showDevelopmentsPanel(0);

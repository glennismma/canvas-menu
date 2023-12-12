document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('menuCanvas');
    const ctx = canvas.getContext('2d');
    const infoDiv = document.getElementById('info');

    const menuItems = [
        { label: 'Home', x: 50, y: 50 },
        { label: 'About', x: 50, y: 120 },
        { label: 'Contact', x: 50, y: 190 }
    ];

    function drawMenu() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#007bff';
        ctx.font = '24px Arial';

        menuItems.forEach(item => {
            ctx.fillRect(item.x - 10, item.y - 30, ctx.measureText(item.label).width + 20, 40);
            ctx.fillStyle = '#fff';
            ctx.fillText(item.label, item.x, item.y + 5);
            ctx.fillStyle = '#007bff';
        });
    }

    drawMenu();

    canvas.addEventListener('click', function (event) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        menuItems.forEach(item => {
            if (
                mouseX >= item.x - 10 &&
                mouseX <= item.x + ctx.measureText(item.label).width + 10 &&
                mouseY >= item.y - 30 &&
                mouseY <= item.y + 10
            ) {
                infoDiv.textContent = `Clicked on ${item.label}`;
            }
        });
    });
});

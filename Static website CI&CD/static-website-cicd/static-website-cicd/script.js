document.getElementById('date').textContent = new Date().toLocaleString();

function changeColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ce7f'];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}
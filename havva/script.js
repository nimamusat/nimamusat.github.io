document.getElementById('forgive').addEventListener('click', function() {
    document.getElementById('message').textContent = "Çok teşekkür ederim ❤️";
});

const notForgiveButton = document.getElementById('notForgive');
notForgiveButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - notForgiveButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - notForgiveButton.offsetHeight);
    notForgiveButton.style.position = 'absolute';
    notForgiveButton.style.left = `${x}px`;
    notForgiveButton.style.top = `${y}px`;
});

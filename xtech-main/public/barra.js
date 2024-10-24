function backToPage() {
    window.location.href = 'cursos.html';
}

const bar = document.querySelector(".bar");
const progress = document.querySelector(".progress");
const form = document.getElementById('quiz-form');

let width = 0;
const increment = 25;

function advanceProgress(element) {
    if (width < 100) {
        width += increment;
        if (width > 100) {
            width = 100; 
        }
        progress.style.width = width + "%";
        progress.textContent = width + "%";
    }
    element.style.display = "none";
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (width < 100) {
        width += increment;
        if (width > 100) {
            width = 100; 
        }
        progress.style.width = width + "%";
        progress.textContent = width + "%";
    }

    alert('Respostas enviadas com sucesso!');
});
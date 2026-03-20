document.addEventListener('DOMContentLoaded', function() {

    // Alerts
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    const showSuccessBtn = document.getElementById('showSuccessBtn');
    const showErrorBtn = document.getElementById('showErrorBtn');

    // Toast
    const toastElement = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastElement);
    const showToastBtn = document.getElementById('showToastBtn');

    // Progress Bar
    const progressBar = document.getElementById('dynamicProgress');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const toggleAnimationBtn = document.getElementById('toggleAnimationBtn');

    // Alerts
    showSuccessBtn.addEventListener('click', () => {
        errorAlert.classList.remove('show');
        successAlert.classList.add('show');
    });

    showErrorBtn.addEventListener('click', () => {
        successAlert.classList.remove('show');
        errorAlert.classList.add('show');
    });

    // Toast
    showToastBtn.addEventListener('click', () => {
        toast.show();
    });

    // Atualizar progresso
    function updateProgress(change) {
        let currentWidth = parseInt(progressBar.style.width.replace('%', '')) || 0;
        let newWidth = Math.min(Math.max(currentWidth + change, 0), 100);

        progressBar.style.width = newWidth + '%';
        progressBar.textContent = newWidth + '%';
    }

    increaseBtn.addEventListener('click', () => updateProgress(10));
    decreaseBtn.addEventListener('click', () => updateProgress(-10));

    // Toggle animação
    toggleAnimationBtn.addEventListener('click', () => {
        progressBar.classList.toggle('progress-bar-animated');
    });

});
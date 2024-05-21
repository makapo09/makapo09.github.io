// script.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Ευχαριστούμε για την αγορά σας!');
        });
    });
});

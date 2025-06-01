document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.getElementById('flashcard');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Simple example: toggle visibility of front/back
    let showingAnswer = false;

    showAnswerBtn.addEventListener('click', () => {
        const front = flashcard.querySelector('.front');
        const back = flashcard.querySelector('.back');

        if (showingAnswer) {
            front.style.display = 'flex';
            back.style.display = 'none';
            showAnswerBtn.textContent = 'Show Answer';
        } else {
            front.style.display = 'none';
            back.style.display = 'flex';
            showAnswerBtn.textContent = 'Hide Answer';
        }
        showingAnswer = !showingAnswer;
    });

    // Navigation logic will go here later
    prevBtn.addEventListener('click', () => {
        alert('Previous card (logic to be implemented)');
    });

    nextBtn.addEventListener('click', () => {
        alert('Next card (logic to be implemented)');
    });
});
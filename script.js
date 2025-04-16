document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const introScreen = document.querySelector('.intro-screen');
    const mainContent = document.querySelector('.main-content');
    const inputArea = document.querySelector('.input-area');
    const resultArea = document.getElementById('result-area');
    const bookPicksInput = document.getElementById('book-picks');
    const summonButton = document.getElementById('summon-button');
    const countdownScreen = document.getElementById('countdown-screen');
    const countdownElement = document.getElementById('countdown');
    const chosenBookTempElement = document.getElementById('chosen-book-temp');

    enterButton.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    summonButton.addEventListener('click', () => {
        const bookList = bookPicksInput.value.split('\n').filter(book => book.trim() !== '');

        if (bookList.length === 0) {
            alert('Please enter at least one book title.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * bookList.length);
        const chosenBook = bookList[randomIndex].trim();

        resultArea.classList.remove('hidden');
        chosenBookTempElement.textContent = "...";

        // Hide input area and temporary result, then show countdown
        setTimeout(() => {
            inputArea.classList.add('hidden');
            resultArea.classList.add('hidden');
            countdownScreen.classList.remove('hidden');

            let count = 5;
            const countdownInterval = setInterval(() => {
                countdownElement.textContent = count;
                count--;
                if (count < 1) {
                    clearInterval(countdownInterval);
                    localStorage.setItem('chosenBook', chosenBook);
                    // Add a delay before navigating to the outro screen
                    setTimeout(() => {
                        window.location.href = 'outro.html';
                    }, 2000); // Adjust this value (in milliseconds) for the desired delay (e.g., 1500ms = 1.5 seconds)
                }
            }, 1000); // Update countdown every 1 second
        }, 2000); // Delay before showing countdown
    });
});
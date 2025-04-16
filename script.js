document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const introScreen = document.querySelector('.intro-screen');
    const mainContent = document.querySelector('.main-content');
    const bookPicksInput = document.getElementById('book-picks');
    const summonButton = document.getElementById('summon-button');
    const resultArea = document.getElementById('result-area');
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

        chosenBookTempElement.textContent = chosenBook;
        resultArea.classList.remove('hidden');

        // Store the chosen book in localStorage
        localStorage.setItem('chosenBook', chosenBook);

        // Redirect to the outro page after a short delay
        setTimeout(() => {
            window.location.href = 'outro.html';
        }, 2000); // Adjust the delay as needed
    });
});
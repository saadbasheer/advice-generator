const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-btn');

async function fetchAdvice() {
    diceButton.disabled = true;
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        
        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = 'Failed to fetch advice. Please try again.';
    } finally {
        diceButton.disabled = false;
    }
}


fetchAdvice();


diceButton.addEventListener('click', fetchAdvice);
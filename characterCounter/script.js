
const textAreaBox = document.getElementById('textAreaBox');
const charCount = document.getElementById('charCount');    
const wordCount = document.getElementById('wordCount');

const countButton = document.getElementById('countButton');
const clearButton = document.getElementById('clearButton');


 
countButton.addEventListener('click', () => {
    const text = textAreaBox.value;  

    const characters = text.length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    charCount.textContent = `Characters:${characters}`;
    wordCount.textContent = `Words:${words}`;
});

clearButton.addEventListener('click', () => {
    textAreaBox.value = '';
    charCount.textContent = `Characters:0`;
    wordCount.textContent = `Words:0`;
});
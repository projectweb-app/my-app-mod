// Phase 1: Get references to all HTML elements
const inputArea = document.getElementById('input-area');
const outputArea = document.getElementById('output-area');
const toLinesBtn = document.getElementById('to-lines-btn');
const toCommasBtn = document.getElementById('to-commas-btn');
const copyBtn = document.getElementById('copy-btn');
const copyToast = document.getElementById('copy-toast');

// NEW: References for new elements
const clearBtn = document.getElementById('clear-btn');
const wordCountEl = document.getElementById('word-count');
const charCountEl = document.getElementById('char-count');
const lineCountEl = document.getElementById('line-count');


// Phase 2: Add Event Listeners for button clicks and text input

// Listener for the "Convert to New Lines" button
toLinesBtn.addEventListener('click', () => {
    const inputText = inputArea.value;
    const convertedText = inputText
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
        .join('\n');
    outputArea.value = convertedText;
});

// Listener for the "Convert to Commas" button
toCommasBtn.addEventListener('click', () => {
    const inputText = inputArea.value;
    const convertedText = inputText
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '')
        .join(', ');
    outputArea.value = convertedText;
});

// Listener for the "Copy Result" button
copyBtn.addEventListener('click', () => {
    const outputText = outputArea.value;

    if (!outputText) {
        return; 
    }

    navigator.clipboard.writeText(outputText).then(() => {
        copyToast.classList.add('show');
        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// NEW: Listener for the "Clear" button
clearBtn.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.value = '';
    // Also reset the stats when clearing
    wordCountEl.textContent = '0';
    charCountEl.textContent = '0';
    lineCountEl.textContent = '0';
});

// NEW: Listener for live text input to update statistics
inputArea.addEventListener('input', () => {
    const text = inputArea.value;
    
    // Calculate stats
    const charCount = text.length;
    // Use a robust regex to count words, handling multiple spaces
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    // Filter out empty lines from the count
    const lineCount = text.split('\n').filter(line => line.trim() !== '').length;

    // Update the display in the HTML
    charCountEl.textContent = charCount;
    wordCountEl.textContent = wordCount;
    lineCountEl.textContent = lineCount;
});
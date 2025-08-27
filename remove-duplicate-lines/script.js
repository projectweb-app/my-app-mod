// Phase 1: Get references to all HTML elements
const inputArea = document.getElementById('input-area');
const outputArea = document.getElementById('output-area');
const copyBtn = document.getElementById('copy-btn');
const copyToast = document.getElementById('copy-toast');
const clearBtn = document.getElementById('clear-btn');
const wordCountEl = document.getElementById('word-count');
const charCountEl = document.getElementById('char-count');
const lineCountEl = document.getElementById('line-count');

// NEW: Reference for our main action button
const removeDuplicatesBtn = document.getElementById('remove-duplicates-btn');


// Phase 2: Add Event Listeners

// NEW: Listener for the "Remove Duplicates" button
removeDuplicatesBtn.addEventListener('click', () => {
    // 1. Get the text and split it into an array of lines.
    const lines = inputArea.value.split('\n');
    
    // 2. The magic step: Create a "Set" from the array.
    // A Set is a special object that automatically stores only unique values.
    // Then, convert the Set back into an array.
    const uniqueLines = [...new Set(lines)];
    
    // 3. Join the unique lines back into a single string.
    const convertedText = uniqueLines.join('\n');
    
    // 4. Display the result.
    outputArea.value = convertedText;
});

// Listener for the "Copy Result" button (re-used)
copyBtn.addEventListener('click', () => {
    const outputText = outputArea.value;
    if (!outputText) return; 

    navigator.clipboard.writeText(outputText).then(() => {
        copyToast.classList.add('show');
        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// Listener for the "Clear" button (re-used)
clearBtn.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.value = '';
    wordCountEl.textContent = '0';
    charCountEl.textContent = '0';
    lineCountEl.textContent = '0';
});

// Listener for live text input to update statistics (re-used)
inputArea.addEventListener('input', () => {
    const text = inputArea.value;
    const charCount = text.length;
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const lineCount = text.split('\n').filter(line => line.trim() !== '').length;

    charCountEl.textContent = charCount;
    wordCountEl.textContent = wordCount;
    lineCountEl.textContent = lineCount;
});
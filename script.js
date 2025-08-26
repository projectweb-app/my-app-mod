// Phase 1: Get references to the HTML elements we need to work with.
const inputArea = document.getElementById('input-area');
const outputArea = document.getElementById('output-area');
const toLinesBtn = document.getElementById('to-lines-btn');
const toCommasBtn = document.getElementById('to-commas-btn');
const copyBtn = document.getElementById('copy-btn');

// Phase 2: Define what happens when we click the buttons.
// We add "event listeners" that wait for a 'click' event.

// Listener for the "Convert to New Lines" button
toLinesBtn.addEventListener('click', () => {
    // 1. Get the text from the input area.
    const inputText = inputArea.value;

    // 2. Perform the conversion.
    // .split(',') breaks the text into pieces at each comma.
    // .map(item => item.trim()) removes any extra spaces from the start/end of each piece.
    // .filter(item => item !== '') removes any empty pieces (from double commas ,,).
    // .join('\n') joins the pieces back together, but with a new line between each.
    const convertedText = inputText
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
        .join('\n');

    // 3. Put the result into the output area.
    outputArea.value = convertedText;
});

// Listener for the "Convert to Commas" button
toCommasBtn.addEventListener('click', () => {
    // 1. Get the text from the input area.
    const inputText = inputArea.value;

    // 2. Perform the conversion.
    // This is the reverse of the above process. We split by new lines.
    const convertedText = inputText
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '')
        .join(', '); // We add a space after the comma for better readability.

    // 3. Put the result into the output area.
    outputArea.value = convertedText;
});

// In script.js, find the copyBtn listener and replace it with this

// Get a reference to the new toast element
const copyToast = document.getElementById('copy-toast');

copyBtn.addEventListener('click', () => {
    const outputText = outputArea.value;

    if (!outputText) {
        return; 
    }

    navigator.clipboard.writeText(outputText).then(() => {
        // --- This is the new part ---
        // Show the toast notification
        copyToast.classList.add('show');
        
        // Hide the toast after 2 seconds
        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2000);

    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

    // 3. Use the modern Clipboard API to copy the text.
    navigator.clipboard.writeText(outputText).then(() => {
        // Success! Provide feedback to the user.
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        
        // Change the button text back after 2 seconds (2000 milliseconds).
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);

    }).catch(err => {
        // This will only happen if there's a browser/permission error.
        console.error('Failed to copy: ', err);
    });

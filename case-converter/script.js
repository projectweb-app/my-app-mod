document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('input-area');
    const outputArea = document.getElementById('output-area');
    const caseControls = document.querySelectorAll('input[name="case"]');
    const charCountEl = document.getElementById('char-count');
    const wordCountEl = document.getElementById('word-count');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');

    const processText = () => {
        const mode = document.querySelector('input[name="case"]:checked').value;
        const text = inputArea.value;
        let convertedText = '';

        if (mode === 'upper') {
            convertedText = text.toUpperCase();
        } else if (mode === 'lower') {
            convertedText = text.toLowerCase();
        } else if (mode === 'title') {
            convertedText = text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
        }
        
        outputArea.value = convertedText;
        updateStats(text);
    };
    
    const updateStats = (text) => {
        charCountEl.textContent = `Characters: ${text.length}`;
        wordCountEl.textContent = `Words: ${text.trim() === '' ? 0 : text.trim().split(/\s+/).length}`;
    };

    const checkURLParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');
        if (data) {
            inputArea.value = decodeURIComponent(data);
            processText();
        }
    };

    inputArea.addEventListener('input', processText);
    caseControls.forEach(radio => radio.addEventListener('change', processText));

    clearBtn.addEventListener('click', () => {
        inputArea.value = '';
        processText();
    });

    copyBtn.addEventListener('click', () => {
        if (!outputArea.value) return;
        navigator.clipboard.writeText(outputArea.value).then(() => {
            const copyToast = document.getElementById('copy-toast');
            copyToast.classList.add('show');
            setTimeout(() => copyToast.classList.remove('show'), 2000);
        });
    });

    checkURLParams();
});
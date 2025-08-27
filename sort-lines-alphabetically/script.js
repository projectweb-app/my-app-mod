document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('input-area');
    const outputArea = document.getElementById('output-area');
    
    const sortAzBtn = document.getElementById('sort-az-btn');
    const sortZaBtn = document.getElementById('sort-za-btn');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');
    
    const wordCountElem = document.getElementById('word-count');
    const charCountElem = document.getElementById('char-count');
    const lineCountElem = document.getElementById('line-count');
    const copyToast = document.getElementById('copy-toast');

    // Sorting function
    const sortLines = (order) => {
        const lines = inputArea.value.split('\n');
        
        // Filter out empty lines before sorting, then add them back if needed, or just ignore them.
        // For simplicity, we'll sort all lines including blanks (blanks will go to the top).
        lines.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        if (order === 'desc') {
            lines.reverse();
        }

        outputArea.value = lines.join('\n');
    };

    // Update stats function
    const updateStats = () => {
        const text = inputArea.value;
        const words = text.match(/\b\w+\b/g) || [];
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        wordCountElem.textContent = words.length;
        charCountElem.textContent = text.length;
        lineCountElem.textContent = text.length > 0 ? lines.length : 0;
    };

    // Event Listeners
    sortAzBtn.addEventListener('click', () => sortLines('asc'));
    sortZaBtn.addEventListener('click', () => sortLines('desc'));

    clearBtn.addEventListener('click', () => {
        inputArea.value = '';
        outputArea.value = '';
        updateStats();
    });

    copyBtn.addEventListener('click', () => {
        if (outputArea.value) {
            outputArea.select();
            document.execCommand('copy');
            copyToast.classList.add('show');
            setTimeout(() => copyToast.classList.remove('show'), 2000);
        }
    });

    inputArea.addEventListener('input', updateStats);
    
    // Initial stats update
    updateStats();
});
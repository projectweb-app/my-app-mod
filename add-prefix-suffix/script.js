document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('input-area');
    const outputArea = document.getElementById('output-area');
    const prefixInput = document.getElementById('prefix-input');
    const suffixInput = document.getElementById('suffix-input');
    const inputStats = document.getElementById('input-stats');
    const outputStats = document.getElementById('output-stats');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    const processText = () => {
        const prefix = prefixInput.value;
        const suffix = suffixInput.value;
        const lines = inputArea.value.split('\n');

        const modifiedLines = lines.map(line => {
            if (line.trim() === '') return ''; // Keep empty lines if they exist
            return `${prefix}${line}${suffix}`;
        });
        
        outputArea.value = modifiedLines.join('\n');
        
        const lineCount = lines.filter(line => line.trim() !== '').length;
        inputStats.textContent = `Lines: ${lineCount}`;
        outputStats.textContent = `Lines: ${lineCount}`;
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
    prefixInput.addEventListener('input', processText);
    suffixInput.addEventListener('input', processText);

    clearBtn.addEventListener('click', () => {
        inputArea.value = '';
        prefixInput.value = '';
        suffixInput.value = '';
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
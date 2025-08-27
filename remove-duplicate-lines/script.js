document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('input-area');
    const outputArea = document.getElementById('output-area');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');
    const inputStats = document.getElementById('input-stats');
    const outputStats = document.getElementById('output-stats');
    const nextStepContainer = document.getElementById('next-step-container');
    const nextStepBtn = document.getElementById('next-step-btn');

    const processText = () => {
        const lines = inputArea.value.split('\n').filter(line => line.trim() !== '');
        
        if (lines.length === 0) {
            outputArea.value = '';
            updateStats(0, 0, 0);
            toggleNextStep(false);
            return;
        }

        const uniqueLines = [...new Set(lines)];
        outputArea.value = uniqueLines.join('\n');
        
        const duplicateCount = lines.length - uniqueLines.length;
        updateStats(lines.length, duplicateCount, uniqueLines.length);
        toggleNextStep(uniqueLines.length > 0);
    };

    const updateStats = (inputCount, duplicateCount, outputCount) => {
        inputStats.textContent = `Lines: ${inputCount} | Duplicates: ${duplicateCount}`;
        outputStats.textContent = `Lines: ${outputCount}`;
    };

    const toggleNextStep = (show) => {
        if (show) {
            nextStepBtn.textContent = 'Sort these unique lines alphabetically';
            const data = encodeURIComponent(outputArea.value);
            nextStepBtn.href = `../sort-lines-alphabetically/?data=${data}`;
            nextStepContainer.style.display = 'block';
        } else {
            nextStepContainer.style.display = 'none';
        }
    };
    
    inputArea.addEventListener('input', processText);

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
});
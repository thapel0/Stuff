const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isEvenlySpaced = (line) => {
    const blackPixelIndices = [];
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '*') {
            blackPixelIndices.push(i);
        }
    }
    
    const spacing = blackPixelIndices[1] - blackPixelIndices[0];
    for (let i = 1; i < blackPixelIndices.length - 1; i++) {
        if (blackPixelIndices[i + 1] - blackPixelIndices[i] !== spacing) {
            return false;
        }
    }
    
    return true;
};

const lines = [];
rl.on('line', (line) => {
    if (line === "END") {
        rl.close();
    } else {
        lines.push(line);
    }
});

rl.on('close', () => {
    for (let i = 0; i < lines.length; i++) {
        if (isEvenlySpaced(lines[i])) {
            console.log(`${i + 1} EVEN`);
        } else {
            console.log(`${i + 1} NOT EVEN`);
        }
    }
});

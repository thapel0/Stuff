const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const packets = [];

rl.on('line', (line) => {
    if (!n) {
        n = parseInt(line);
    } else {
        const [arrivalTime, packetNumber] = line.split(' ').map(Number);
        packets.push({ arrivalTime, packetNumber });
    }
});

rl.on('close', () => {
    packets.sort((a, b) => a.arrivalTime - b.arrivalTime);
    
    let currentTime = packets[0].arrivalTime;
    let totalLagTime = 0;

    for (const packet of packets) {
        if (packet.arrivalTime > currentTime) {
            totalLagTime += packet.arrivalTime - currentTime;
            // console.log(totalLagTime)
            currentTime = packet.arrivalTime;
        }

        currentTime += 1; 
    }

    console.log(totalLagTime);
});

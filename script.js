// script.js

async function runSpeedTest() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Running speed test...';

    const startTime = new Date().getTime();
    const response = await fetch('https://www.example.com'); // Replace with an actual endpoint

    if (response.ok) {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // in seconds
        const speed = (response.headers.get('Content-Length') / duration) * 8; // in bits per second

        resultElement.textContent = `Download speed: ${speed.toFixed(2)} bps`;
    } else {
        resultElement.textContent = 'Failed to run speed test';
    }
}

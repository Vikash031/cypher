function generateKey(message, key) {
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            result += ' ';
        } else {
            result += key[keyIndex % key.length];
            keyIndex++;
        }
    }
    return result;
}

function encrypt() {
    const message = document.getElementById('message').value;
    const keyInput = document.getElementById('key').value;

    if (keyInput === '') {
        alert("Please enter a key!");
        return;
    }

    const key = generateKey(message, keyInput);
    let result = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            result += ' ';
        } else {
            let m = message.charCodeAt(i);
            let k = key.charCodeAt(i);
            result += String.fromCharCode((m + k) % 256);
        }
    }

    document.getElementById('result').textContent = result;
}

function decrypt() {
    const message = document.getElementById('message').value;
    const keyInput = document.getElementById('key').value;

    if (keyInput === '') {
        alert("Please enter a key!");
        return;
    }

    const key = generateKey(message, keyInput);
    let result = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            result += ' ';
        } else {
            let m = message.charCodeAt(i);
            let k = key.charCodeAt(i);
            result += String.fromCharCode((m - k + 256) % 256);
        }
    }

    document.getElementById('result').textContent = result;
}

function resetFields() {
    document.getElementById('message').value = '';
    document.getElementById('key').value = '';
    document.getElementById('result').textContent = '';
}

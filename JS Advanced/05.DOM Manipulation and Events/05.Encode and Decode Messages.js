function encodeAndDecodeMessages() {
    let [messageToEncodeElement, receivedToDecodeElement] = Array.from(document.querySelectorAll('textarea'));
    let [encodeButtonEl, decodeButtonEl] = Array.from(document.querySelectorAll('button'));

    encodeButtonEl.addEventListener('click', encodeAndSendF);
    decodeButtonEl.addEventListener('click', decodeAndReadF);

    function encodeAndSendF() {
        let messageToEncode = messageToEncodeElement.value;
        messageToEncodeElement.value = '';

        receivedToDecodeElement.value = encodeMessageF(messageToEncode);
    }

    function decodeAndReadF() {
        let messageToDecode = receivedToDecodeElement.value;
        receivedToDecodeElement.value = decodeMessageF(messageToDecode);
    }

    function encodeMessageF(message) {
        return message
            .split('')
            .map(ch => ch.charCodeAt() + 1)
            .map(x => String.fromCharCode(x))
            .join('');
    }

    function decodeMessageF(message) {
        return message
            .split('')
            .map(ch => ch.charCodeAt() - 1)
            .map(x => String.fromCharCode(x))
            .join('');
    }
}


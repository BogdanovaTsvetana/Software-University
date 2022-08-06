function attachEvents() {
    let textareaElement = document.getElementById('messages');
    let nameElement = document.getElementById('author');
    let messageElement = document.getElementById('content');
    let submitBtnElement = document.getElementById('submit');
    let refreshBtnElement = document.getElementById('refresh');

    let baseUrl = `http://localhost:3030/jsonstore/messenger`;
    
    submitBtnElement.addEventListener('click', submitHandler);
    refreshBtnElement.addEventListener('click', refreshHandler);

    function submitHandler(e) {
        e.preventDefault();

        let author = nameElement.value;
        let content = messageElement.value;

        nameElement.value = '';
        messageElement.value = '';

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author,
                content
            })
        })
            .then(res => res.json())
            .then(textareaElement.value += `\n${author}: ${content}`)
            .catch(err => console.error(err))
    }

    function refreshHandler() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let allMessages = Object.values(data)
                    .map(m => `${m.author}: ${m.content}`)
                    .join('\n');

                textareaElement.value = allMessages;
            })
            .catch(err => console.error(err))
    }
}

attachEvents();
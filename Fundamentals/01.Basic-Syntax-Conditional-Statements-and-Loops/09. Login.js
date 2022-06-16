// passed judge 100/100

function login(input) {
    let index = 0;
    let username = input[index++];
    let pass = '';
    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }

    let count = 0;
    let isBlocked = false;
    let command = input[index++];
    while (command !== pass) {
        count++;
        if (count >= 4) {
            console.log(`User ${username} blocked!`);
            isBlocked = true;
            break;
        }
        console.log('Incorrect password. Try again.')
        command = input[index++];
    }

    if (!isBlocked) {
        console.log(`User ${username} logged in.`);
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
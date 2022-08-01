function solve() {
    let infoElement = document.querySelector('#info .info');
    let departButtonElement = document.getElementById('depart');
    let arriveButtonElement = document.getElementById('arrive');

    function depart() {
        let stopId = 'depot';
        if( infoElement.getAttribute('data-curr-stop') !== null) {
            stopId = infoElement.getAttribute('data-next-stop');
        }
        
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`)
            .then(res => res.json())
            .then(stopInfo => {
                infoElement.setAttribute('data-curr-stop', stopInfo.name);
                infoElement.setAttribute('data-next-stop', stopInfo.next);

                infoElement.textContent = `Next stop ${stopInfo.name}`;

                departButtonElement.disabled = true;
                arriveButtonElement.disabled = false;
            })
            .catch(err => {
                infoElement.textContent = 'Error';
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = true;
            })
    }

    function arrive() {
        let currStop = infoElement.getAttribute('data-curr-stop');
        infoElement.textContent = `Arriving at ${currStop}`;
        
        
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

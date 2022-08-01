
function getInfo() {
    let stopInputElement = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
    let busesUlElement = document.getElementById('buses');
    let stopId = stopInputElement.value;

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(res => res.json())
        .then(stopInfo => {
            stopNameElement.textContent = stopInfo.name;
            Array.from(busesUlElement.querySelectorAll('li')).forEach(li => li.remove());
            
            Object.entries(stopInfo.buses).forEach(b => {
                let liEl = document.createElement('li');
                liEl.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
                busesUlElement.appendChild(liEl);
            });
        })
        .catch(err => {
            stopNameElement.textContent = 'Error';
            Array.from(document.querySelectorAll('li')).forEach(li => li.remove());
        })
}
function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    function split(line) {
        return line.split('|')
    };

    function createTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status)
    };

    function sortArr(criteria) {
        let crit = {
            destination: (a, b) => a.destination.localeCompare(b.destination),
            price: (a, b) => a.price - b.price,
            status: (a, b) => a.status.localeCompare(b.status),
        }

        return crit[criteria]
    }

    return arr
        .map(split)
        .map(createTicket)
        .sort(sortArr(criteria))
}


console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'))

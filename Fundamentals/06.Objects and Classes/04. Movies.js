function movies1(data) {
    let movies = [];
    for (const line of data) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            movies.push({
                name
            });

        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(m => m.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie))
        }
    })
}



movies1([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])

function movies(commands) {
    const movies = {};

    commands.forEach(command => {
        if (command.startsWith('addMovie')) {
            const movieName = command.replace('addMovie ', '');
            if (!movies[movieName]) {
                movies[movieName] = { name: movieName };
            }
        } else if (command.includes('directedBy')) {
            const [movieName, director] = command.split(' directedBy ');
            if (movies[movieName]) {
                movies[movieName].director = director;
            } else {
                movies[movieName] = { name: movieName, director: director };
            }
        } else if (command.includes('onDate')) {
            const [movieName, date] = command.split(' onDate ');
            if (movies[movieName]) {
                movies[movieName].date = date;
            } else {
                movies[movieName] = { name: movieName, date: date };
            }
        }
    });

    // Print out movies with complete details
    for (const movieName in movies) {
        const movie = movies[movieName];
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])	
    // {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
    // {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])	
    // {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
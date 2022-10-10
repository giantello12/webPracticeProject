'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов'),
          b = prompt('На сколько оцените его?');
    
    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != ''){
        personaMovieDB.movies[a] = b;        
    } else {
        console.log('error');
        i--;
    }
}

if (personaMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов!");
} else if (personaMovieDB.count <= 30) {
    console.log("Вы классический зритель!");
} else {
    console.log("Вы киноман!");
}

console.log(personaMovieDB);
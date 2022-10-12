'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    }
}

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов').trim(),
              b = prompt('На сколько оцените его?').trim();
        
        if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != ''){
            personaMovieDB.movies[a] = b;        
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonaLevel() {
    if (personaMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов!");
    } else if (personaMovieDB.count <= 30) {
        console.log("Вы классический зритель!");
    } else {
        console.log("Вы киноман!");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    } else {
        console.log("error");
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {     
        const genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
        
        if (genre != null && genre.length < 50 && genre != '') {
            personaMovieDB.genres[i - 1] = genre;      
        } else {
            console.log('error');
            i--;
        }
    }
}

start();

rememberMyFilms();

detectPersonaLevel();

writeYourGenres();

showMyDB(personaMovieDB.privat);
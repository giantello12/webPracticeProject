'use strict';

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonaLevel: function() {
        if (personaMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов!");
        } else if (personaMovieDB.count <= 30) {
            console.log("Вы классический зритель!");
        } else {
            console.log("Вы киноман!");
        }
    },

    showMyDB: function(hidden) {
        if (hidden) {
            console.log(personaMovieDB);
        } else {
            console.log("error");
        }
    },

    toggleVisibleMyDB: function() {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false;
        } else {
            personaMovieDB.privat = true;
        }
        
        console.log(personaMovieDB.privat);
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {     
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
            
            if (genre != null && genre.length < 50 && genre != '') {
                personaMovieDB.genres[i - 1] = genre;      
            } else {
                console.log('error');
                i--;
            }
        }

        personaMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};

personaMovieDB.start();

personaMovieDB.rememberMyFilms();

personaMovieDB.detectPersonaLevel();

personaMovieDB.writeYourGenres();

personaMovieDB.toggleVisibleMyDB();

personaMovieDB.showMyDB(personaMovieDB.privat);

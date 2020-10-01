(() => {
    const genres = document.querySelectorAll("input[type=checkbox]");
    const movieGenres = document.querySelector("input[name=movie-genres]");

    genres.forEach(genre => {
        genre.addEventListener("change", (e) => {

            if(e.target.checked)
                movieGenres.value += `${e.target.value},`;

        });
    })

})()
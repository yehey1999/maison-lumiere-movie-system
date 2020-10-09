(() => {
    const genres = document.querySelectorAll("input[type=checkbox]");
    const movieGenres = document.querySelector("input[name=movie-genres]");

    genres.forEach(genre => {
        genre.addEventListener("change", (e) => {
            movieGenres.value = "";

            genres.forEach(g => {
                if(g.checked === true)
                    movieGenres.value += `${g.value},`;
        
                console.log("Here")
            });
            

        });
    })



})()
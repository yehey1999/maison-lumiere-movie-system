const movieTitle = document.querySelector("input[name=title]");
const releaseDate = document.querySelector("input[name=release_date]");
const director = document.querySelector("input[name=director]");
const price = document.querySelector("input[name=price]");
const noItems = document.querySelector("input[name=no_items]");
const genres = document.querySelectorAll("input[type=checkbox]");
const castsHolder = document.querySelector(".casts-body-table");
const image = document.querySelector(".profile-pic");
const movieId = document.querySelector("input[name=movie-id-update]");
const movieGenres = document.querySelector("input[name=movie-genres]");

let castsV = document.querySelector("input[name=movie-casts]");

const movieForm = document.querySelector(".movie-form")

const updateBtn = document.querySelector("#saveBtn");

const modal = document.querySelector(".modal");

const populateDVD = (id) => {

    movie = JSON.parse(document.querySelector("#data"+id).getAttribute('movie-json'));
    media_url = document.querySelector("#data"+id).getAttribute('media-url');

    console.log(id);

    movieId.value = id;
    movieTitle.value = movie.title;
    releaseDate.value = movie.release_date;
    director.value = movie.director;
    price.value = movie.price;
    noItems.value = movie.no_items;

    console.log(movie.title);
    let casts = movie.casts.split(',');
    
    while(castsHolder.firstChild)
        castsHolder.removeChild(castsHolder.firstChild);
    
    casts.forEach( cast => {
        if(cast){
            let name = cast.split(' ');
            castsHolder.appendChild(createRowMovie(name[0], name[1]));
        }
    })

    genres.forEach( g => g.checked = false)
    
    movieGenres.value = movie.genres;
    castsV.value = movie.casts;
    
    movie.genres.split(',').forEach(genre => {
        genres.forEach( g => {
            if(g.value === genre)
                g.checked = true;
        })
    })
    
    image.src = media_url+movie.images;

}

const createRowMovie = (firstname, lastname) => {
    let row = document.createElement("tr");  
    let tdFirstName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdCloseBtn = document.createElement("td");

    row.setAttribute("class","w3-animate-left");
    row.setAttribute("id", firstname + " " + lastname);
    
    tdFirstName.innerHTML = firstname;
    tdLastName.innerHTML = lastname;
    tdCloseBtn.innerHTML = "<span id='close' class='close close-btn text-center' aria-hidden='true'>&times;</span>"
    
    row.appendChild(tdFirstName);
    row.appendChild(tdLastName);
    row.appendChild(tdCloseBtn);

    console.log("row");
    console.log(row);

    return row;
    
}
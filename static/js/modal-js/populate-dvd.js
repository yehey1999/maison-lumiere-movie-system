const movieTitle = document.querySelector("input[name=title]");
const releaseDate = document.querySelector("input[name=release_date]");
const director = document.querySelector("input[name=director]");
const price = document.querySelector("input[name=price]");
const noItems = document.querySelector("input[name=no_items]");
const genres = document.querySelectorAll("input[type=checkbox]");
const castHolder = document.querySelector("#casts-body-table");
const image = document.querySelector(".profile-pic");



const populateDVD = (id) => {
    console.log("id");
    movie = JSON.parse(document.querySelector("#data"+id).getAttribute('movie-json'));
    media_url = document.querySelector("#data"+id).getAttribute('media-url');

    console.log(movie)
    console.log(movie.title)

    movieTitle.value = movie.title;
    releaseDate.value = movie.release_date;
    director.value = movie.director;
    price.value = movie.price;
    noItems.value = movie.no_items;

    console.log(movie.title);
    let casts = movie.casts.split(',');
    
    while(castsBodyTable.firstChild)
        castsBodyTable.removeChild(castsBodyTable.firstChild);
    
    casts.forEach( cast => {
        if(cast){
            let name = cast.split(' ');
            castsBodyTable.appendChild(createRowMovie(name[0], name[1]));
        }
    })

    genres.forEach( g => g.checked = false)
    
    movie.genres.split(',').forEach(genre => {
        genres.forEach( g => {
            if(g.value === genre)
                g.checked = true;
        })
    })
    
    image.src = media_url+movie.images;

    console.log(media_url+movie.images)
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
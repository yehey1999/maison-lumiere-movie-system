const title = document.queryselector("input[name=title]");
const releaseDate = document.querySelector("input[name=release_date");
const director = document.querySelector("input[name=director]");
const price = document.querySelector("input[name=price]");
const noItems = document.querySelector("input[name=no_items]");
const genres = document.querySelectorAll("input[name=genre]");
const castHolder = document.querySelector("#casts-body-table");
const image = document.querySelector("input[name=image]");


const populateDVD = (movie) => {

    console.log(movie.title);
    /*
    title.value = data.title;
    releaseDate.value = data.release_date;
    director.value = data.director;
    price.value = data.price;
    noItems.value = data.no_items;

    let casts = data.casts.split(',');
    
    casts.forEach( cast => {
        let name = cast.split(' ');
        castsBodyTable.appendChild(createRow(name[0], name[1]));
    })

    data.genres.split(',').forEach(genre => {
        genres.forEach( g => {
            if(g.value === genre)
                g.checked = true;
        })
    })
    
}

const createRow = (firstname, lastname) => {
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
    */
}
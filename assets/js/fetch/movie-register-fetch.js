//get the the form
const movieForm = document.querySelector('#movie-form');

const formIndicator = document.querySelector('#form-indicator');
const successIndicator = document.querySelector('#success-indicator');
const loader = document.querySelector('#loader');

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //movieForm.classList.add('d-none');
    //formIndicator.classList.add('d-none');
    
    //when the submit is clicked 
    //show the loader
    loader.classList.add('d-block');
    
    //get the genres
    let genres = "";
    let genresCheckboxes = document.querySelectorAll("input[name=genre]");
    genresCheckboxes.forEach(genre => genres += genre.checked ? genre.value + ", " : "");

    //get the casts inputs
    let casts = "";
    let castsInputs = document.querySelectorAll(".casts-body-table tr");
    castsInputs.forEach(cast => casts += cast.id + ", " );

    //make a form data out of your form
    //append the additional data
    form = new FormData(movieForm);
    form.append('casts', casts);
    form.append('genres', genres);

    //send the the form data 
    fetch('/movie/register/', {
        method: 'POST',
        body: form
    })
    .then(res => {
        //this will be read if the fetch is done      
        res.json()
    })
    .then(res => {
        //this will be read if the previous then is done
        //loader is removed
        //success indicator is shown
        console.log(res);
        //if(res.success === 'true'){
            loader.classList.remove('d-block');
            loader.classList.add('d-none');
            successIndicator.classList.add('d-block');
        //}
        //else
        //    console.log("Error");
    });
})
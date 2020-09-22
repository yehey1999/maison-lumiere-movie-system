//get the the form
const customerForm = document.querySelector('#customer-form');

const formIndicator = document.querySelector('#form-indicator');
const successIndicator = document.querySelector('#success-indicator');
const failedIndicator = document.querySelector('#failed-indicator');
const loader = document.querySelector('#loader');

customerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    customerForm.classList.add('d-none');
    formIndicator.classList.add('d-none');
    
    //when the submit is clicked 
    //show the loader
    loader.classList.add('d-block');
    

    //make a form data out of your form
    form = new FormData(customerForm);

    //send the the form data 
    fetch('/customer/register/', {
        method: 'POST',
        body: form
    })
    .then(res => res.json())
    .then(res => {
        loader.classList.remove('d-block');
        loader.classList.add('d-none');
        if(res.success === true)
            successIndicator.classList.add('d-block');
        else
            failedIndicator.classList.add('d-block');
    });
})
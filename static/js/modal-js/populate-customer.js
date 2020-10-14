const customer_id = document.querySelector("input[name=customer_id2]");

//Basic Info Tab
const lastName = document.querySelector("input[name=last_name]");
const firstName = document.querySelector("input[name=first_name]");
const middleName = document.querySelector("input[name=middle_name]");
const gender = document.querySelector("select[name=gender]");
const status = document.querySelector("select[name=status]");
const birthdate = document.querySelector("input[name=birthdate]");

//Address Tab
const street = document.querySelector("input[name=street]");
const barangay = document.querySelector("select[name=barangay]");
const city = document.querySelector("select[name=city]");
const province = document.querySelector("select[name=province]");
const zipCode = document.querySelector("input[name=zipcode]");

//Spouse Tab
const spouseName = document.querySelector("input[name=spouse_name]");
const spouseOccupation = document.querySelector("input[name=spouse_occupation]");
const noChildren = document.querySelector("input[name=no_children]");

//Profile
const profilePic = document.querySelector("#profile-pic");



const populateCustomer = (id) => {
    customer = JSON.parse(document.querySelector("#data"+id).getAttribute('customer-json'));
    media_url = document.querySelector("#data"+id).getAttribute('media-url');
    
    customer_id.value = customer.id;
    lastName.value = customer.last_name;
    firstName.value = customer.first_name;
    middleName.value = customer.middle_name;
    gender.value = customer.gender;
    status.value = customer.status;
    birthdate.value = customer.birthdate;
    
    street.value = customer.street;
    province.value = customer.province;

    let provCode = document.querySelector(`[data-province="${customer.province}"]`)
    populateCities(provCode.id);

    let cityCode = document.querySelector(`[data-city="${customer.city}"]`);
    populateBarangays(cityCode.id);

    city.value = customer.city;
    barangay.value = customer.barangay;

    zipCode.value = customer.zipcode;

    spouseName.value = customer.spouse_name;
    spouseOccupation.value = customer.spouse_occupation;
    noChildren.value = customer.no_children;
    

    profilePic.src = media_url+customer.image;
    console.log(media_url+customer.image);
}




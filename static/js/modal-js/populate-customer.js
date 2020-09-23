//Basic Info Tab
const lastName = document.querySelector("#last-name");
const firstName = document.querySelector("#first-name");
const middleName = document.querySelector("#middle-name");
const gender = document.querySelector("#gender");
const status = document.querySelector("#status");
const birthdate = document.querySelector("#birthdate");

//Address Tab
const street = document.querySelector("#street");
const barangay = document.querySelector("#barangay");
const city = document.querySelector("#city");
const province = document.querySelector("#province");
const zipCode = document.querySelector("#zip-code");

//Spouse Tab
const spouseName = document.querySelector("#spouse-name");
const spouseOccupation = document.querySelector("#spouse-occupation");
const noChildren = document.querySelector("#no-of-children");

//Profile
const profilePic = document.querySelector("#profile-pic");

const populateCustomer = (id) => {
    
    console.log("id");
    //customer = JSON.parse(document.querySelector("#data"+id).getAttribute('customer-json'));
    //console.log(customer);
    customer = document.querySelector("#data"+id).getAttribute('customer-json');
    console.log(customer.first_name)

    /*
    lastName.value = customer.last_name;
    firstName.value = customer.first_name;
    middleName.value = customer.middle_name;
    gender.value = customer.gender;
    status.value = customer.status;
    birthdate.value = customer.birthdate;
    
    street.value = customer.street;
    province.value = customer.province;
    barangay.value = customer.barangay;
    city.value = customer.city;
    zipCode.value = customer.zipCode;

    spouseName.value = customer.spouse_name;
    spouseOccupation.value = customer.spouse_occupation;
    noChildren.value = customer.no_children;
    
    */
    //profilePic.src = `{{load static '${customer[0].image}'}}`;

}




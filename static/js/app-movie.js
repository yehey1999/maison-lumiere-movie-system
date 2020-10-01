const inputTexts = document.querySelectorAll("#input-text");
const submitBtn = document.querySelector("#submitBtn");
const tabs = document.getElementsByClassName("tab");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const steps = document.getElementsByClassName("step");

// Current tab is set to be the first tab (0)
let currentTab = 0; 

inputTexts.forEach( element => {
    element.addEventListener('input', (event) => {
      if(isValidInput(event.target)){
          event.target.classList.add("is-valid");
          event.target.classList.remove("is-invalid");
      }
      else{
          event.target.classList.remove("is-valid");
          event.target.classList.add("is-invalid");
      }

    });
});

const fixStepIndicator = (n) => {
  // This function removes the "active" class of all steps...
  let i;
  
  for (i = 0; i < steps.length; i++)
    steps[i].className = steps[i].className.replace(" active", "");


  //... and adds the "active" class to the current step:
  steps[n].className += " active";
}

const showTab = (n) => {
  // This function will display the specified tab of the form ...
  tabs[n].style.display = "block";

  // ... and fix the Previous/Next buttons:
  if (n == 0) 
    prevBtn.style.display = "none";
  else{
    prevBtn.style.display = "inline";
    nextBtn.classList.remove("d-none"); 
    submitBtn.classList.add("d-none");
  }

  if (n == (tabs.length - 1)) {
    nextBtn.classList.toggle("d-none"); 
    submitBtn.classList.toggle("d-none");
  } 
  else{
    nextBtn.innerHTML = "Next";
    nextBtn.classList.remove("btn-success");
  }

  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

const nextPrev = (n) => {
  // This function will figure out which tab to display

  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) 
    return false;

  // Hide the current tab:
  tabs[currentTab].style.display = "none";

  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  // if you have reached the end of the form... :
  if (currentTab >= tabs.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

//This is where the validation
//will revolve 
//validateForm and isValidInput

const validateForm = () => {
  let inputs, i, valid = true;
  inputs = tabs[currentTab].getElementsByTagName("input");

  // A loop that checks every input field in the current tab:
  for(i = 0; i < inputs.length; i++){

    if(inputs[i].id ==='first-name-cast' || inputs[i].id === 'last-name-cast')
      continue;

    if(inputs[i].type !== 'checkbox'){

      //check if the input[i] is valid
      if(isValidInput(inputs[i]) === false){
        inputs[i].className += " is-invalid";
        //inputs[i].classList.add("is-invalid")
        //are the same
        valid = false;
      }
      else{
        //this add is-valid class to the input
        //this removes is-invalid class to the input
        //take note:
        //these classes are from bootstrap
        inputs[i].classList.add("is-valid");
        inputs[i].classList.remove("is-invalid");
      }
    }

  }

  // If the valid status is true, mark the step as finished and valid:
  if(valid){
    steps[currentTab].className += " finish";
  }

  return valid;
}

//this function checks if the input is valid
const isValidInput = (input) => {
    
    if(input.value === "")
      return false;

    //these conditional statements 
    //identify what type of input are they
    //and do validation based on their names
    
    if(input.name === "title" || input.name === "director")
      return input.value.length >= 2 && input.value.length <= 50 ? true : false;
    
    if(input.name === "price")
      return input.value >= 1 && input.value <= 10000 ? true : false;
    
    if(input.name === "no_items")
      return input.value >= 1 && input.value <= 1000 ? true : false;
    
    return true;
}

showTab(currentTab);


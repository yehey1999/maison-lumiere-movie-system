const basicInfoInputTexts = document.querySelectorAll("#input-text");
const submitBtn = document.querySelector("#submitBtn");


basicInfoInputTexts.forEach( element => {
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


// Current tab is set to be the first tab (0)
let currentTab = 0; 

const fixStepIndicator = (n) => {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("step");
  
  for (i = 0; i < x.length; i++)
    x[i].className = x[i].className.replace(" active", "");


  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

const showTab = (n) => {
  // This function will display the specified tab of the form ...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  // ... and fix the Previous/Next buttons:
  if (n == 0) 
    document.getElementById("prevBtn").style.display = "none";
  else{
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("nextBtn").classList.remove("d-none"); 
    submitBtn.classList.add("d-none");
  }

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").classList.toggle("d-none"); 
    submitBtn.classList.toggle("d-none");
  } 
  else{
    document.getElementById("nextBtn").innerHTML = "Next";
    document.getElementById("nextBtn").classList.remove("btn-success");
  }

  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

const nextPrev = (n) => {
  // This function will figure out which tab to display
  let tabs = document.getElementsByClassName("tab");

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

const validateForm = () => {
  let tabs, inputs, i, valid = true;
  tabs = document.getElementsByClassName("tab");
  inputs = tabs[currentTab].getElementsByTagName("input");

  // A loop that checks every input field in the current tab:
  for(i = 0; i < inputs.length; i++){

    if(inputs[i].id ==='first-name-cast' || inputs[i].id === 'last-name-cast')
      continue;

    if(inputs[i].type !== 'checkbox'){
      if(isValidInput(inputs[i]) === false){
        inputs[i].className += " is-invalid";
        valid = false;
      }
      else{
        inputs[i].classList.add("is-valid");
        inputs[i].classList.remove("is-invalid");
      }
    }

  }

  // If the valid status is true, mark the step as finished and valid:
  if(valid){
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid;
}

const isValidInput = (input) => {
    if(input.value === "")
      return false;

    if(input.name === "title" || input.name === "director")
      return input.value.length >= 2 && input.value.length <= 50 ? true : false;
    
    if(input.name === "price")
      return input.value >= 1 && input.value <= 10000 ? true : false;
    
    if(input.name === "no_items")
      return input.value >= 1 && input.value <= 1000 ? true : false;
    
    return true;
}


showTab(currentTab);


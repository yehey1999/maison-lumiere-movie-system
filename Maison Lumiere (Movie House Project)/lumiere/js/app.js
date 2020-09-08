const basicInfoInputTexts = document.querySelectorAll("#input-text");
const submitBtn = document.querySelector("#submitBtn");

basicInfoInputTexts.forEach( element => {
    element.addEventListener('input', (e) => {
        if(e.target.value !== ""){
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
        }
        else{
            e.target.classList.remove("is-valid");
            e.target.classList.add("is-invalid");
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
  let x = document.getElementsByClassName("tab");

  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) 
    return false;

  // Hide the current tab:
  x[currentTab].style.display = "none";

  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

const validateForm = () => {
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  // A loop that checks every input field in the current tab:
  for(i = 0; i < y.length; i++){

    if(y[i].id ==='first-name-cast' || y[i].id === 'last-name-cast')
      continue;

    if(y[i].value == ""){
      // add an "invalid" class to the field:
      y[i].className += " is-invalid";

      // and set the current valid status to false:
      valid = false;
    }
  }

  // If the valid status is true, mark the step as finished and valid:
  if(valid){
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid;
}


showTab(currentTab);


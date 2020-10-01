const viewBtn = document.querySelector("#viewBtn");
const editBtn = document.querySelector("#editBtn");
const selects = document.querySelectorAll("select");

//const saveBtn = document.querySelector("#saveBtn");
//const inputs = document.querySelectorAll(".modal #input-text");

let isEdit = false;
let editBtnIcon = document.querySelector("#editBtnIcon");

const modalTitle = document.querySelector("#modal-title");

const checkboxes = document.querySelectorAll("input[type=checkbox]");

viewBtn.addEventListener('click', () => {
    if(isEdit===true){
        edit();
        console.log('edit');
    }
    else{
        console.log('view');
        view();
    }
});

editBtn.addEventListener('click', () => {
    isEdit = !isEdit;
    if(isEdit===true){
        edit();
        console.log('edit');
    }
    else{
        view();
        console.log('view');
    }
});

closeBtn.addEventListener('click', () => {
    view();
    isEdit = false;
})
discardBtn.addEventListener('click', () => {
    view();
    isEdit = false;
})

/*
saveBtn.addEventListener('click', () => {
    view();
    isEdit = false;
})
*/
const edit = () => {
    
    editBtnIcon.className = 'fa fa-eye';
    editBtn.classList.remove('btn-primary');
    editBtn.classList.add('btn-success');

    modalTitle.innerHTML = "Edit";
    disableStatus(false);
    saveBtn.classList.remove('d-none');
    discardBtn.classList.remove('d-none');
    saveBtn.classList.add('entry');
    discardBtn.classList.add('entry');
   
    
}

const view = () => {
    editBtnIcon.className = 'fa fa-pen';
    editBtn.classList.remove('btn-success');
    editBtn.classList.add('btn-primary');

    modalTitle  .innerHTML = "View";
    disableStatus(true);
    saveBtn.classList.add('d-none');
    discardBtn.classList.add('d-none');

    console.log('true');
}

const disableStatus = (status) => {
    inputs.forEach(input => {
        input.disabled = status;
    });
    selects.forEach(select => {
        select.disabled = status;
    });
    checkboxes.forEach(checkbox => {
        checkbox.disabled = status;
    })

    try{
        //if(firstNameCast !== null)
            firstNameCast.disabled=status;

       // if(lastNameCast !== null)
            lastNameCast.disabled=status;
    }catch(err){

    }

}


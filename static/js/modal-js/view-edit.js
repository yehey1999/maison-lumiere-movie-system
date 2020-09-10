const viewBtn = document.querySelector("#viewBtn");
const editBtn = document.querySelector("#editBtn");
const selects = document.querySelectorAll("select");

//const saveBtn = document.querySelector("#saveBtn");
//const inputs = document.querySelectorAll(".modal #input-text");
let isEdit = true;
let editBtnIcon = document.querySelector("#editBtnIcon");

const title = document.querySelector("#modal-title");

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
    console.log('close');
})
discardBtn.addEventListener('click', () => {
    view();
    console.log('close');
})

const edit = () => {
    
    editBtnIcon.className = 'fa fa-eye';
    editBtn.classList.remove('btn-primary');
    editBtn.classList.add('btn-success');

    title.innerHTML = "Edit";
    disableStatus(false);
    saveBtn.classList.remove('d-none');
    discardBtn.classList.remove('d-none');
    saveBtn.classList.add('entry');
    discardBtn.classList.add('entry');

    isEdit = false;    
    
}

const view = () => {
    
    editBtnIcon.className = 'fa fa-pen';
    editBtn.classList.remove('btn-success');
    editBtn.classList.add('btn-primary');

    title.innerHTML = "View";
    disableStatus(true);
    saveBtn.classList.add('d-none');
    discardBtn.classList.add('d-none');

    isEdit = true;

    console.log('true');
    
}

const disableStatus = (status) => {
    inputs.forEach(input => {
        input.disabled = status;
    });
    selects.forEach(select => {
        select.disabled = status;
    });

    console.log(inputs);
}

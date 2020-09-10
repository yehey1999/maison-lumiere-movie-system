const viewBtn = document.querySelector("#viewBtn");
const editBtn = document.querySelector("#editBtn");
const selects = document.querySelectorAll("select");
const discardBtn = document.querySelector("#discardBtn");
//const saveBtn = document.querySelector("#saveBtn");
let isEdit = true;

const title = document.querySelector("#modal-title");

//viewBtn.addEventListener('click', () => view());

const edit = () => {
    /*
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
    */
}

const view = () => {
    /*
    editBtnIcon.className = 'fa fa-pencil';
    editBtn.classList.remove('btn-success');
    editBtn.classList.add('btn-primary');

    title.innerHTML = "View";
    disableStatus(true);
    saveBtn.classList.add('d-none');
    discardBtn.classList.add('d-none');

    isEdit = true;
    */
}

const disableStatus = (status) => {
    inputs.forEach(input => {
        input.disabled = status;
    });
    selects.forEach(select => {
        select.disabled = status;
    });
}

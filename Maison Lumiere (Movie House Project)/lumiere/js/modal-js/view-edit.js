const viewBtn = document.querySelector("#viewBtn");
const editBtn = document.querySelector("#editBtn");
const selects = document.querySelectorAll("select");
const discardBtn = document.querySelector("#discardBtn");
//const saveBtn = document.querySelector("#saveBtn");

const title = document.querySelector("#modal-title");

viewBtn.addEventListener('click', () => {
    title.innerHTML = "View";
    disableStatus(true);
    saveBtn.classList.add('d-none');
    discardBtn.classList.add('d-none');

    console.log(closeBtn);
});

editBtn.addEventListener('click', () => {
    title.innerHTML = "Edit";
    disableStatus(false);
    saveBtn.classList.remove('d-none');
    discardBtn.classList.remove('d-none');
})

const disableStatus = (status) => {
    inputs.forEach(input => {
        input.disabled = status;
    });
    selects.forEach(select => {
        select.disabled = status;
    });
}

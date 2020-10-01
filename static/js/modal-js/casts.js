( () => {

    let addCastBtn = document.querySelector("#add-btn-cast");
    let castsBodyTable = document.querySelector(".casts-body-table");
    let firstNameCast = document.querySelector("#first-name-cast");
    let lastNameCast = document.querySelector("#last-name-cast");
    let casts = document.querySelector("input[name=movie-casts]")

    addCastBtn.addEventListener('click', (e) => {
        
        e.preventDefault();
        
        castsBodyTable.appendChild(createRow(firstNameCast.value, lastNameCast.value))
        casts.value += `${firstNameCast.value} ${lastNameCast.value},`;
        
        firstNameCast.value = "";
        lastNameCast.value = "";

    });

    castsBodyTable.addEventListener('click', (e) => {
        console.log(e.target.classList[0]);

        if(e.target.id  === "close")
            e.target.parentElement.parentElement.remove();

    });

    const createRow = (firstname, lastname) => {
        let row = document.createElement("tr");  
        let tdFirstName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdCloseBtn = document.createElement("td");

        row.setAttribute("class","w3-animate-left");
        tdFirstName.innerHTML = firstname;
        tdLastName.innerHTML = lastname;
        tdCloseBtn.innerHTML = "<span id='close' class='close close-btn text-center' aria-hidden='true'>&times;</span>"
        
        row.appendChild(tdFirstName);
        row.appendChild(tdLastName);
        row.appendChild(tdCloseBtn);

        return row;
    }

})()

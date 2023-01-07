let selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData)
        resetForm();
    }
}


function readFormData() {
    let formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["Location"] = document.getElementById("Location").value;
    formData["Expertise"] = document.getElementById("Expertise").value;
    formData["Experience"] = document.getElementById("Experience").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("doctorsList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Location;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Expertise;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Experience;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="ud" onClick="onUpdate(this)">Update</a> 
                       <a  class="ud" onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("Location").value = "";
    document.getElementById("Expertise").value = "";
    document.getElementById("Experience").value = "";
    selectedRow = null;
}

function onUpdate(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Location").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Expertise").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Experience").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.Location;
    selectedRow.cells[2].innerHTML = formData.Expertise;
    selectedRow.cells[3].innerHTML = formData.Experience;
}

function onDelete(td) {
    if (confirm('The doctors details will be deleted. Are you sure?')) {
        row = td.parentElement.parentElement;
        document.getElementById("doctorsList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
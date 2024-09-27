const urlBase = "https://utn-lubnan-api-2.herokuapp.com/api/";

export async function getStudents() {
    try {
        const response = await fetch(`${urlBase}Student`, {method: 'GET'});
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        if(error instanceof TypeError){
            console.log("Error de red: " + error);
        }
        else{
            console.log("Otro errror: " + error);
        }
    }
}


export async function postStudents(student) {
    try {
        const response = await fetch(`${urlBase}Student`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        });
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        if(error instanceof TypeError){
            console.log("Error de red: " + error);
        }
        else{
            console.log("Otro errror: " + error);
        }
    }
}

export async function deleteStudent(id) {
    try {
        const response = await fetch(`${urlBase}Student/${id}`, {method: 'DELETE'});
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        if(error instanceof TypeError){
            console.log("Error de red: " + error);
        }
        else{
            console.log("Otro errror: " + error);
        }
    }
}

export async function putStudent(student, id) {
    try {
        const response = await fetch(`${urlBase}Student/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        });

        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        if(error instanceof TypeError){
            console.log("Error de red: " + error);
        }
        else{
            console.log("Otro errror: " + error);
        }
    }
}
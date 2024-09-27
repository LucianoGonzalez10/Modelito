import{ deleteStudent, getStudents, postStudents } from "./api.js";

const estudiantesDiv = document.getElementById('estudiantes');
const botonAgregar = document.getElementById('boton-agregar');

async function cargarEstudiantes() {
    const estudiantes = await getStudents();
    estudiantesDiv.innerHTML = '';
    estudiantes.forEach(estudiante => {
        if(estudiante.careerId != null){
           estudiantesDiv.innerHTML += 
        `<div> 
            <h3> Estudiante ID: ${estudiante.studentId} </h3>
            <h3> Carrera ID: ${estudiante.careerId} </h3>
            <h3> Nombre: ${estudiante.firstName} </h3>
            <h3> Apellido: ${estudiante.lastName} </h3> 
            <h3> Email: ${estudiante.email} </h3>
            <br>
        </div>` 
        }
        
    });
}

cargarEstudiantes();

botonAgregar.addEventListener('click', async ()=>{
    let estudiante = {
        careerId : document.getElementById('entrada-carreraId').value,
        firstName : document.getElementById('entrada-nombre').value,
        lastName : document.getElementById('entrada-apellido').value,
        email : document.getElementById('entrada-email').value
    }
    document.getElementById('entrada-carreraId').value = '';
    document.getElementById('entrada-nombre').value = '';
    document.getElementById('entrada-apellido').value = '';
    document.getElementById('entrada-email').value = '';
    await postStudents(estudiante);
    cargarEstudiantes();
})

const botonEliminar = document.getElementById('boton-eliminar');

botonEliminar.addEventListener('click', async()=>{
    await deleteStudent(document.getElementById('entrada-eliminar').value);
    cargarEstudiantes();
})

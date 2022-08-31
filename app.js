document.getElementById('tarea').addEventListener('submit', guardarTarea);

function guardarTarea(e){

    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    const tarea = {
        titulo,
        descripcion
    };

    if (localStorage.getItem('tareas') === null){
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    obtenerTarea();
    e.preventDefault();
    document.getElementById('tarea').reset();
    
}

function obtenerTarea() {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let verTareas = document.getElementById('tareas');

    verTareas.innerHTML = '';
        for(let unaTarea of tareas){
            let titulo = unaTarea.titulo;
            let descripcion = unaTarea.descripcion;

            verTareas.innerHTML += `<div class="card mb-3">
          <div class="card-body">
            <h4>${titulo}</h4>
            <p>${descripcion}</p>
            <a class="btn btn-danger" onclick="eliminarTarea('${titulo}')">
                Eliminar
            </a>
          </div>
         </div>`
    }
}

function eliminarTarea(titulo){
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for(let i = 0; i < tareas.length; i++){
        if (tareas[i].titulo == titulo){
            tareas.splice(i, 1);
        }
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
    obtenerTarea();
}

obtenerTarea();
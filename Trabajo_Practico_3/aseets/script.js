let opciones;
let tareas = [];
function seleccion() {
  opciones = parseInt(
    prompt(
      "que operacion decea realizar \n 1 Agregar Tarea\n 2 Mostra Lista De Tarea\n 3 Editar Tarea \n 4 Eliminar Tarea\n 0 Salir\n"
    )
  );
}
while (opciones != 0) {
  seleccion();
  function agregarTareas() {
    tareas.push(prompt("ingrese su tarea nueva"));
    if (tareas != 0) {
      alert("-Tarea nueva añadida- \n" + tareas.join("\n"));
    } else {
      alert("no ingresate ninguna tarea");
    }
  }
  function mostraTareas() {
    if (tareas != 0) {
      alert("-sus tareas son-\n" + tareas.join("\n"));
    } else {
      alert("no agregaste ninguna tarea todavia");
    }
  }
  function edicioTareas() {
    if (tareas != 0) {
      tareas[
        parseInt(
          prompt(
            "Selecione el elemento a modificar.\nDe arriba abajo constando desde el 0 que es el primero arriba:\n\n" +
              tareas.join("\n")
          )
        )
      ] = [prompt("ingresa la nueva tarea")];
      alert("-se actualizo sus tareas-\n" + tareas.join("\n"));
    } else {
      alert("no hay tareas para modificar");
    }
  }
  function eliminarTareas() {
    if (tareas != 0) {
      tareas.shift([
        parseInt(
          prompt(
            "Selecione el elemento a eliminar.\n De arriba abajo constando desde el 0 que es el primero arriba:\n\n" +
              tareas.join("\n")
          )
        ),
      ]);
      alert("-se a eliminado el elemento-\n" + tareas.join("\n"));
    } else {
      alert("no hay tareas para eliminar");
    }
  }

  switch (opciones) {
    case 1:
      agregarTareas();
      break;
    case 2:
      mostraTareas();
      break;
    case 3:
      edicioTareas();
      break;
    case 4:
      eliminarTareas();
      break;
    case 0:
      alert("adios que tenga un buen dia ");
  }
}

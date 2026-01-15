import { getServerURL } from "./task1.js";

// Task 2: listUsers()
export function listUsers(){
    return fetch(getServerURL() + "/users") //! return
        .then(respuesta => respuesta.json()) //! "respuesta".json
        .then(datos => console.log(datos))  
}
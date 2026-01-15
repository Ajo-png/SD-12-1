// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export function addUser(name, last_name, email){
    return fetch(getServerURL() + "/users", {
        method:"POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            first_name: name,
            last_name: last_name,
            email: email
        })
    })
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
}
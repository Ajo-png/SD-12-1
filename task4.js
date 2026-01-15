// Task 4: delUser(number)
export function delUser(id){
        return fetch(getServerURL() + "/users" + `/${id}`, {
            method:"DELETE"
        }).then(respuesta => respuesta.json())
        .then(datos => console.log(datos))
}
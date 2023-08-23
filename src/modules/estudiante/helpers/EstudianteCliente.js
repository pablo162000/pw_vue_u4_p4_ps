import axios from "axios"

export const obtenerEstudianteFachada = async (cedula) => {

    console.log('AXIOS')
    // return await obtenerEstudianteAPI(cedula);
    return await obtenerEstudianteAPIAxios(cedula);
}


export const ingresarEstudianteFachada = (bodyEstudiante) => {

    return ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {

    return actualizarEstudiante(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = async (id) => {
    return await eliminarEstudiante(id);

}

const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data

}
const obtenerEstudianteAPIAxios = async (cedula) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODI2NzE3LCJleHAiOjE2OTI4Mjg3MTd9.7SdCsAXbyd8rqtOE-xHYZpH_79VVQD1kTcoEZLE82B_RabL6BI5MAcdSnzACHlV-KNsdQqGkXWkuuYssPd8wjQ",
        "Mensaje": "Valor1"
    }

    console.log('AXIOS2');
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`, {headers: headers}).then(r => r.data);
    console.log(data);
    return data

}

const ingresarEstudiante = async (bodyEstudiante) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODI2NzE3LCJleHAiOjE2OTI4Mjg3MTd9.7SdCsAXbyd8rqtOE-xHYZpH_79VVQD1kTcoEZLE82B_RabL6BI5MAcdSnzACHlV-KNsdQqGkXWkuuYssPd8wjQ",
        "Mensaje": "Valor1"
    }

    await axios.post(`http://localhost:8081/API/V1.0/Matricula/estudiantes`, bodyEstudiante,{headers: headers}).then(r => r.data);

    console.log("Se ha insertado el estudiante")
}


const actualizarEstudiante = (bodyEstudiante, id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODI2NzE3LCJleHAiOjE2OTI4Mjg3MTd9.7SdCsAXbyd8rqtOE-xHYZpH_79VVQD1kTcoEZLE82B_RabL6BI5MAcdSnzACHlV-KNsdQqGkXWkuuYssPd8wjQ",
        "Mensaje": "Valor1"
    }
    axios.put(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, bodyEstudiante,{headers: headers}).then(r => r.data);

}

const eliminarEstudiante = async (id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODI2NzE3LCJleHAiOjE2OTI4Mjg3MTd9.7SdCsAXbyd8rqtOE-xHYZpH_79VVQD1kTcoEZLE82B_RabL6BI5MAcdSnzACHlV-KNsdQqGkXWkuuYssPd8wjQ",
        "Mensaje": "Valor1"
    }
    const data = axios.delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, {headers: headers}).then(r => r.data);
    return data;

}



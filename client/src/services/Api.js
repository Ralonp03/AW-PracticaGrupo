//Conexion a los endpoints del backend
const axios = require('axios');

const loginUser = async (name, password) => {
    const params = {
        name,
        password
    }

    const response = await axios.post('http://localhost:8081/api/login/', params)
    return response
}

const registerUser = async(name, password) => {
    const params = {
        name,
        password
    }


    const response = await axios.post('http://localhost:8081/api/partners/register', params)
    return response
}



module.exports = { loginUser, registerUser }
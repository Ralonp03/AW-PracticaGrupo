//Conexion a los endpoints del backend
const axios = require('axios');

const loginUser = async (name, password) => {
    const params = {
        name,
        password
    }

    const response = await axios.post('http://localhost:8081/api/login', params)
    return response
}

const consultaPrueba = async (nameUsuario, userPoints, name) => {
    const params = {
        nameUsuario,
        userPoints,
        name
    }

    const response = await axios.post('http://localhost:8081/api/compras', params)
    return response
}

const deleteUnitsOfCard = async (cardName,cardUnits) => {
    const params = {
        cardName,
        cardUnits,
    }

    const response = await axios.post('http://localhost:8081/api/compras2', params)
    return response
}

const recopilar = async (name) => {
    const params = {
        name
    }

    const response = await axios.post('http://localhost:8081/api/recopilar', params)
    return response
}

const updateDatas = async (cardUnits, cardPrice, cardName) => {
    const params = {
        cardUnits,
        cardPrice,
        cardName
    }

    const response = await axios.post('http://localhost:8081/api/admin', params)
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
const getCard = async(name) => {
    const params = {
        name
    }


    const response = await axios.post('http://localhost:8081/api/getCard', params)
    return response
}
const loginON = async(name) => {
    const params = {
        name
    }


    const response = await axios.post('http://localhost:8081/api/loginON', params)
    return response
}

const comprobarEvento = async(question,answer) => {
    const params = {
        question,
        answer
    }


    const response = await axios.post('http://localhost:8081/api/compruebaPregunta', params)
    return response
}

const bonificacionEvento = async(nameUser,pointsUser) => {
    const params = {
        nameUser,
        pointsUser
    }


    const response = await axios.post('http://localhost:8081/api/bonificacion', params)
    return response
}

const updateAdivinanza = async(question,answer) => {
    const params = {
        question,
        answer
    }


    const response = await axios.post('http://localhost:8081/api/compruebaAdivinanza', params)
    return response
}



module.exports = { loginUser, registerUser , updateDatas, consultaPrueba, deleteUnitsOfCard, recopilar , getCard, loginON, comprobarEvento, bonificacionEvento, updateAdivinanza}

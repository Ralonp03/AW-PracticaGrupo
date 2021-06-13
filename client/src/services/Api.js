//Conexion a los endpoints del backend
const axios = require('axios');

const getInfoUser = async ( name ) => { //Funcion que obtiene los datos de un usuario
    const response = await axios.post(`http://localhost:8081/api/users/${name}`, name)
    
    const { points } = response.data
    return points
}

const recopilarInfo = async (name) => { //Funcion que recopila informacion de una carta
    const params = {
        name
    }

    const response = await axios.post('http://localhost:8081/api/recopilar', params)
    return response
}

const compraCarta = async (nameUsuario, userPoints, name) => {
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


const updateDatas = async (cardUnits, cardPrice, cardName) => {
    const params = {
        cardUnits,
        cardPrice,
        cardName
    }

    const response = await axios.post('http://localhost:8081/api/admin', params)
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



module.exports = { getInfoUser, updateDatas, compraCarta, deleteUnitsOfCard, recopilarInfo , getCard, loginON}
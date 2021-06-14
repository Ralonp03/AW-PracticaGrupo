//Conexion a los endpoints del backend
const axios = require('axios');

const getInfoUser = async (name) => {
    //Funcion que obtiene los datos de un usuario
    const response = await axios.get(`http://localhost:8081/api/users/${name}`);
    const { points } = response.data;
    return points;
  };

//FUNCIONES DE EVENTOS
  const comprobarPregunta = async(question,answer) => {
    const params = {
        question,
        answer
    }
    const response = await axios.post('http://localhost:8081/api/events/compruebapregunta', params)
    return response
}

const comprueboUsuario = async(nameUser, question, typeEvent) => {
    const params = {
        nameUser,
        question,
        typeEvent
    }
    const response = await axios.post('http://localhost:8081/api/events/comprueboUsuario', params)
    return response
}

const bonificacion = async(nameUser, pointsUser) => {
    const params = {
        nameUser,
        pointsUser
    }
    console.log('PARAMS: ', params)
    const response = await axios.post('http://localhost:8081/api/events/bonificacion', params)
    return response
}
const updateAdivinanza = async(question, answer) => {
    console.log("paso1");
    const params = {
        question,
        answer
    }
    const response = await axios.post('http://localhost:8081/api/compruebaAdivinanza', params)
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


module.exports = { 
    getInfoUser, 
    updateDatas, 
    consultaPrueba, 
    deleteUnitsOfCard, 
    recopilar , 
    getCard, 
    loginON, 
    comprobarPregunta, 
    comprueboUsuario,
     updateAdivinanza, 
     bonificacion
}

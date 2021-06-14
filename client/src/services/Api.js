//Conexion a los endpoints del backend
const axios = require("axios");

//FUNCIONES PARA OBTENER TODOS LOS DATOS
const getAllUsers = async() => {
  const response = await axios.get(`http://localhost:8081/api/users/allusers`);
  return response
}

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

const bonificacionEvento = async(nameUser, pointsUser) => {
    const params = {
        nameUser,
        pointsUser
    }
    const response = await axios.post('http://localhost:8081/api/events/bonificacion', params)
    return response
}
const updateAdivinanza = async(question, answer) => {
    const params = {
        question,
        answer,
    }
    const response = await axios.post('http://localhost:8081/api/events/compruebaAdivinanza', params)
    return response
}

const getAllCollections = async(name) => {
  const response = await axios.get(`http://localhost:8081/api/collections/allcollections/${name}`);
  return response
}

const getAllCards = async() => {
  const response = await axios.get(`http://localhost:8081/api/cards/allcards`);
  return response
}

// FUNCIONES PARA OBTENER INFORMACION DE UN PARÁMETRO EN CONCRETO
const getAllCardsUser = async(name) => {
  //Funcion que trae todas las cartas de un usuario
  const response = await axios.get(`http://localhost:8081/api/cards/allcards/${name}`);
  return response;
}


const getInfoUser = async (name) => {
  //Funcion que obtiene los datos de un usuario
  const response = await axios.get(`http://localhost:8081/api/users/${name}`);
  const { points } = response.data;
  return points;
};

const getInfoCard = async (name) => {
  //Funcion que recopila informacion de una carta
  const response = await axios.get(`http://localhost:8081/api/cards/${name}`);
  return response;
};

const getInfoCardById = async (id) => {
  //Funcion que recopila informacion de una carta
  const response = await axios.get(`http://localhost:8081/api/cards/getid/${id}`);
  return response;
};





const compraCarta = async (nameUsuario, userPoints, name) => {
  const params = {
    nameUsuario,
    userPoints,
    name,
  };

  const response = await axios.post(
    "http://localhost:8081/api/compras",
    params
  );
  return response;
};

const deleteUnitsOfCard = async (cardName, cardUnits) => {
  const params = {
    cardName,
    cardUnits,
  };

  console.log(params);

  const response = await axios.put(
    `http://localhost:8081/api/cards/deleteCard/${cardName}`,
    params
  );
  return response;
};


const deleteUnitsOfCardv2 = async (cardName, cardUnits) => {
  const params = {
    cardName,
    cardUnits,
  };

  console.log(params);

  const response = await axios.put(
    `http://localhost:8081/api/cards/deleteCard1Unit/${cardName}`,
    params
  );
  return response;
};

//FUNCION PARA ACTUALIZAR LOS DATOS DE LAS CARTAS
const updateUnitsOfCard = async (cardUnits, cardName) => {
  const params = {
    cardUnits,
    cardName,
  };

  const response = await axios.post(`http://localhost:8081/api/admin/updateunits/${cardName}`, params);
  return response;
};

const updateDatas = async (cardPrice, cardName) => {
  const params = {
    cardPrice,
    cardName,
  };

  const response = await axios.post(`http://localhost:8081/api/admin/updatecard/${cardName}`, params);
  return response;
};

module.exports = {
  getAllUsers,
  getAllCollections,
  getAllCards,
  getAllCardsUser,
  getInfoUser,
  getInfoCard,
  getInfoCardById,
  updateDatas,
  compraCarta,
  deleteUnitsOfCard,
  updateUnitsOfCard,
  comprobarPregunta,
  comprueboUsuario,
  bonificacionEvento,
  updateAdivinanza,
  deleteUnitsOfCardv2
};

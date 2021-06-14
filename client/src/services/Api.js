//Conexion a los endpoints del backend
const axios = require("axios");

//FUNCIONES PARA OBTENER TODOS LOS DATOS
const getAllUsers = async() => {
  const response = await axios.get(`http://localhost:8081/api/users/allusers`);
  return response
}

const getAllCollections = async() => {
  const response = await axios.get(`http://localhost:8081/api/collections/allcollections`);
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
  const response = await axios.get(`http://localhost:8081/api/cards/${id}`);
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

const updateDatas = async (cardUnits, cardPrice, cardName) => {
  const params = {
    cardUnits,
    cardPrice,
    cardName,
  };

  const response = await axios.post("http://localhost:8081/api/admin", params);
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
};

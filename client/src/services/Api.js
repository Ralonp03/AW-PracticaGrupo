//Conexion a los endpoints del backend
const axios = require("axios");

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

const getAllCards = async(name) => {
  //Funcion que trae todas las cartas de un usuario
  const response = await axios.get(`http://localhost:8081/api/cards/allcards/${name}`);
  return response;
}



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
  getInfoUser,
  getInfoCard,
  getAllCards,
  updateDatas,
  compraCarta,
  deleteUnitsOfCard,
};

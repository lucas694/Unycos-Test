import axios from "axios";

const config = {
  headers: {
    'Content-Type': 'application/json',
    'x-mejor-key': 'unycos'
  }
}

const baseUrl = 'https://api.beta.unycos.com/u/'

const getNatacionPhotos = () => {
  return axios.get(`${baseUrl}courses/spotlights/natacion`, config);
}

export default getNatacionPhotos;
